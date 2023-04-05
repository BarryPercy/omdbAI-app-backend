import Express from "express" 
import listEndpoints from "express-list-endpoints"
import cors from 'cors'
import moviesRouter from './api/movies/index'
import searchRouter from './api/search/index'
import 'dotenv/config';

const server = Express()
const port = process.env.PORT
console.log("this is port->",process.env.PORT)
server.use(Express.json())

server.use(cors())
server.use(Express.json())

server.use("/movies", moviesRouter)
server.use("/search", searchRouter)

server.listen(port, () => {
    console.table(listEndpoints(server))
    console.log(`Server is running on port ${port}`)
})