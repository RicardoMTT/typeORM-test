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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTipoDocumento = exports.deleteTypeDocument = exports.createTypeDocuments = exports.getTypeDocuments = void 0;
var typeorm_1 = require("typeorm");
var tipoDocumento_1 = require("../entity/tipoDocumento");
var getTypeDocuments = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var typeDocuments, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, typeorm_1.getRepository(tipoDocumento_1.TipoDocumento).find()];
            case 1:
                typeDocuments = _a.sent();
                return [2 /*return*/, res.json(typeDocuments)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.json({ msg: error_1 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getTypeDocuments = getTypeDocuments;
var createTypeDocuments = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newTypeDocument, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(tipoDocumento_1.TipoDocumento).create(req.body)];
            case 1:
                newTypeDocument = _a.sent();
                return [4 /*yield*/, typeorm_1.getRepository(tipoDocumento_1.TipoDocumento).save(newTypeDocument)];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.createTypeDocuments = createTypeDocuments;
var deleteTypeDocument = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("xd", req.params.id);
                id = req.params.id;
                return [4 /*yield*/, typeorm_1.getRepository(tipoDocumento_1.TipoDocumento).delete(id)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, res.json(response)];
        }
    });
}); };
exports.deleteTypeDocument = deleteTypeDocument;
var updateTipoDocumento = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, typeorm_1.getRepository(tipoDocumento_1.TipoDocumento).findOne(id)];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 3];
                typeorm_1.getRepository(tipoDocumento_1.TipoDocumento).merge(user, req.body); // Reemplaza algunos valore(valores nuevos)
                return [4 /*yield*/, typeorm_1.getRepository(tipoDocumento_1.TipoDocumento).save(user)];
            case 2:
                result = _a.sent();
                return [2 /*return*/, res.json(result)];
            case 3: return [2 /*return*/, res.json({ message: "error" })];
        }
    });
}); };
exports.updateTipoDocumento = updateTipoDocumento;
