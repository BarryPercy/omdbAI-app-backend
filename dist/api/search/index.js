"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const searchRouter = express_1.default.Router();
searchRouter.get("/:title", async (req, res, next) => {
    try {
        console.log("searching");
        const response = await (0, node_fetch_1.default)(`http://www.omdbapi.com/?s=${req.params.title}&type=movie&apikey=${process.env.API_KEY}`);
        if (response.ok) {
            const search = await response.json();
            res.send(search);
        }
    }
    catch (error) {
        next(error);
    }
});
exports.default = searchRouter;
//# sourceMappingURL=index.js.map