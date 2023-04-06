import Express from "express" 
import listEndpoints from "express-list-endpoints"
import cors from 'cors'
import moviesRouter from './api/movies/index'
import searchRouter from './api/search/index'
import rateLimit from 'express-rate-limit';
import 'dotenv/config';

console.log("1")
const server = Express()
console.log("2")
const port = process.env.PORT
server.use(Express.json())
console.log("3")
server.use(cors())
console.log("4")
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5
  });
server.use(limiter);
console.log("5")
server.use("/movies", moviesRouter)
server.use("/search", searchRouter)

server.listen(port, () => {
    console.table(listEndpoints(server))
    console.log(`Server is running on port ${port}`)
})