"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moviesRouter = express_1.default.Router();
moviesRouter.get("/:imdbId", async (req, res, next) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=${req.params.imdbId}&apikey=${process.env.API_KEY}`);
        if (response.ok) {
            const movie = await response.json();
            const movieObject = {
                title: movie.Title,
                poster: movie.Poster,
                year: movie.Year,
                plot: movie.Plot,
                imdbID: movie.imdbID
            };
            res.send(movieObject);
        }
    }
    catch (error) {
        next(error);
    }
});
exports.default = moviesRouter;
//# sourceMappingURL=index.js.map