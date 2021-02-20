"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
var jwt = require("jsonwebtoken");
var config_1 = __importDefault(require("../config/config"));
var checkJwt = function (req, res, next) {
    var token = req.headers["auth"];
    var jwtPayload;
    try {
        jwtPayload = jwt.verify(token, config_1.default.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (error) {
        return res
            .status(401)
            .json({ message: "Falta enviar el token de autenticación" });
    }
    var userId = jwtPayload.userId, username = jwtPayload.username;
    var newToken = jwt.sign({ userId: userId, username: username }, config_1.default.jwtSecret, {
        expiresIn: "1h",
    });
    res.setHeader("token", newToken);
    next();
};
exports.checkJwt = checkJwt;
