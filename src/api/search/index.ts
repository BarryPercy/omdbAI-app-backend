import express from "express";
import axios from "axios";
import { tedisClient } from "../../redis";
const searchRouter = express.Router()

searchRouter.get("/:title", async (req,res,next)=> { //gets the search term and gets the top 10 responses
    try {
        try {
            let cache = await tedisClient.get(`search ${req.params.title}`); //checks if the search is already in the cache, added search keyword so there's no conflicts with a movie search
            if(cache === null){ //sends a request top OMDb api if it's not in the cache          
                const response = await axios.get(`http://www.omdbapi.com/?s=${req.params.title}&type=movie&apikey=${process.env.API_KEY}`)
                if(response.status===200){
                    const search = await response.data; //converts to readable data
                    await tedisClient.set(`search ${req.params.title}`, JSON.stringify(search)); //puts the search results in the cache
                    res.send(search) 
                }else{
                    res.status(400).send(`Failed to fetch anything with search term ${req.params.title}`)
                }
            }else{
                res.send(JSON.parse(cache.toString()))   //if it is in the cache it sends a JSON object of the search to the client.
            }
            
          } catch (err) {
            console.log(err);
          }
        
    } catch (error) {
        next(error)
    }
})

export default searchRouter