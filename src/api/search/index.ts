import express from "express";
import axios from "axios";

const searchRouter = express.Router()

searchRouter.get("/:title", async (req,res,next)=> {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${req.params.title}&type=movie&apikey=${process.env.API_KEY}`)
        if(response.status===200){
            const search = await response.data;
            res.send(search)
        }else{
            res.status(400).send(`Could not fetch anything with ${req.params.title}`)
        }
    } catch (error) {
        next(error)
    }
})

export default searchRouter