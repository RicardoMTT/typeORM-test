"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tipoContribuyente_controller_1 = require("../controllers/tipoContribuyente.controller");
var router = express_1.Router();
router.get("/tiposContribuyente", tipoContribuyente_controller_1.getTypeContribuyent);
router.post("/tiposContribuyente", tipoContribuyente_controller_1.createTypeContribuyent);
exports.default = router;
