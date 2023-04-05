import express from "express";

const moviesRouter = express.Router()

moviesRouter.get("/:imdbId", async (req,res,next)=> {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=${req.params.imdbId}&apikey=${process.env.API_KEY}`)
        if(response.ok){
            const movie = await response.json();
            res.send(movie)
        }
    } catch (error) {
        next(error)
    }
})

export default moviesRouter