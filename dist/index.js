"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var tipoDocumento_routes_1 = __importDefault(require("./routes/tipoDocumento.routes"));
var tipoContribuyente_routes_1 = __importDefault(require("./routes/tipoContribuyente.routes"));
var entidad_routes_1 = __importDefault(require("./routes/entidad.routes"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var helmet_1 = __importDefault(require("helmet"));
var app = express_1.default();
typeorm_1.createConnection();
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(helmet_1.default());
// Routes
app.use(tipoContribuyente_routes_1.default);
app.use(tipoDocumento_routes_1.default);
app.use(entidad_routes_1.default);
app.use(user_routes_1.default);
app.listen(4000);
console.log(4000);
