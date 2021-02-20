"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.createUser = exports.users = void 0;
var typeorm_1 = require("typeorm");
var config_1 = __importDefault(require("../config/config"));
var user_1 = require("../entity/user");
var jwt = require("jsonwebtoken");
var users = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(user_1.User).find()];
            case 1:
                user = _a.sent();
                return [2 /*return*/, res.json(user)];
        }
    });
}); };
exports.users = users;
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, role, user, userRepository, response, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password, role = _a.role;
                user = new user_1.User();
                user.username = username;
                user.password = password;
                user.role = role;
                userRepository = typeorm_1.getRepository(user_1.User);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                user.hashPassword();
                return [4 /*yield*/, userRepository.save(user)];
            case 2:
                response = _b.sent();
                return [2 /*return*/, res.json("user created")];
            case 3:
                error_1 = _b.sent();
                console.log(error_1);
                return [2 /*return*/, res.status(400).json({ message: "Error login" })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, userRepository, user, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password;
                if (!(username && password)) {
                    res.status(400).json({ message: "Error 400" });
                }
                return [4 /*yield*/, typeorm_1.getRepository(user_1.User)];
            case 1:
                userRepository = _b.sent();
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, userRepository.findOneOrFail({
                        where: {
                            username: username,
                        },
                    })];
            case 3:
                user = _b.sent();
                // Check password
                if (!user.checkPassword(password)) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ message: "Username or password incorrect" })];
                }
                token = jwt.sign({ userId: user.id, username: user.username }, config_1.default.jwtSecret, {
                    expiresIn: "1h",
                });
                return [2 /*return*/, res.json({ message: "ok", token: token })];
            case 4:
                error_2 = _b.sent();
                return [2 /*return*/, res.status(400).json({ message: "Username or password incorrect" })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
