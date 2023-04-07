import Express from "express" 
import listEndpoints from "express-list-endpoints"
import cors from 'cors'
import moviesRouter from './api/movies/index'
import searchRouter from './api/search/index'
import rateLimit from 'express-rate-limit';
import 'dotenv/config';

const server = Express()
const port = process.env.PORT
server.use(Express.json())
server.use(cors())
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 30
  });
server.use("/movies", moviesRouter)
server.use(limiter);
server.use("/search", searchRouter)
server.listen(port, () => {
    console.table(listEndpoints(server))
    console.log(`Server is running on port ${port}`)
})