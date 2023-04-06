import express from "express";
import axios from "axios";

const moviesRouter = express.Router()

interface Movie {
    Title: string;
    Poster: string;
    Year: string;
    Plot: string;
    imdbID: string;
  }

moviesRouter.get("/:imdbId", async (req,res,next)=> {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${req.params.imdbId}&apikey=${process.env.API_KEY}`)
        if(response.status=200){
            const movie = await response.data as Movie;
            const movieObject = {
                title: movie.Title,
                poster: movie.Poster,
                year: movie.Year,
                plot: movie.Plot,
                imdbID: movie.imdbID
            }
            res.send(movieObject)
        }
    } catch (error) {
        next(error)
    }
})

export default moviesRouter