"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const searchRouter = express_1.default.Router();
searchRouter.get("/:title", async (req, res, next) => {
    try {
        const response = await axios_1.default.get(`http://www.omdbapi.com/?s=${req.params.title}&type=movie&apikey=${process.env.API_KEY}`);
        if (response.status === 200) {
            const search = await response.data;
            res.send(search);
        }
        else {
            res.status(400).send(`Could not fetch anything with ${req.params.title}`);
        }
    }
    catch (error) {
        next(error);
    }
});
exports.default = searchRouter;
//# sourceMappingURL=index.js.map