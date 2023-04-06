"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./api/movies/index"));
const index_2 = __importDefault(require("./api/search/index"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
require("dotenv/config");
console.log("1");
const server = (0, express_1.default)();
console.log("2");
const port = process.env.PORT;
server.use(express_1.default.json());
console.log("3");
server.use((0, cors_1.default)());
console.log("4");
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 1000,
    max: 5
});
server.use(limiter);
console.log("5");
server.use("/movies", index_1.default);
server.use("/search", index_2.default);
server.listen(port, () => {
    console.table((0, express_list_endpoints_1.default)(server));
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map