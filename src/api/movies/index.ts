import express from "express";

const moviesRouter = express.Router()

moviesRouter.get("/:imdbId", async (req,res,next)=> {
    try {
        const movie = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=4131979d")
        if(movie.ok){
            console.log(movie)
        }
    } catch (error) {
        next(error)
    }
})

export default moviesRouter