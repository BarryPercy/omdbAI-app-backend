import express from "express";
import fetch from 'node-fetch';

const searchRouter = express.Router()

searchRouter.get("/:title", async (req,res,next)=> {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${req.params.title}&type=movie&apikey=${process.env.API_KEY}`)
        if(response.ok){
            const search = await response.json();
            res.send(search)
        }
    } catch (error) {
        next(error)
    }
})

export default searchRouter