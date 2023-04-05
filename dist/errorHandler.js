"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericErrorHandler = exports.NotFoundErrorHandler = exports.BadRequestHandler = void 0;
class BadRequestHandler extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}
exports.BadRequestHandler = BadRequestHandler;
class NotFoundErrorHandler extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}
exports.NotFoundErrorHandler = NotFoundErrorHandler;
const genericErrorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    console.error(err);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({ message });
};
exports.genericErrorHandler = genericErrorHandler;
//# sourceMappingURL=errorHandler.js.map