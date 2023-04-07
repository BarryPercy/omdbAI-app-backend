import { Tedis} from "tedis";
import 'dotenv/config';

const redisPort = process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : undefined;
export const tedisClient = new Tedis({
    port: redisPort,
    host: process.env.REDIS_DB,
    password: process.env.REDIS_PASSWORD
  });
