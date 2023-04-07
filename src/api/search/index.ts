import express from "express";
import axios from "axios";
import { tedisClient } from "../../redis";
const searchRouter = express.Router()

searchRouter.get("/:title", async (req,res,next)=> {
    try {
        try {
            let cache = await tedisClient.get(req.params.title);
            console.log("catch here",cache)
            if(cache === null){
                console.log("not in db")
                
                const response = await axios.get(`http://www.omdbapi.com/?s=${req.params.title}&type=movie&apikey=${process.env.API_KEY}`)
                if(response.status===200){
                    const search = await response.data;
                    await tedisClient.set(req.params.title, JSON.stringify(search));
                    res.send(search)
                }else{
                    res.status(400).send(`Could not fetch anything with ${req.params.title}`)
                }
            }else{
                console.log("is in db")
                console.log(cache)
                res.send(JSON.parse(cache.toString()))   
            }
            
          } catch (err) {
            console.log(err);
          }
        
    } catch (error) {
        next(error)
    }
})

export default searchRouter