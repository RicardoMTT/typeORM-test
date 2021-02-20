"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tipoDocumento_controller_1 = require("../controllers/tipoDocumento.controller");
var router = express_1.Router();
router.get("/tiposDocumentos", tipoDocumento_controller_1.getTypeDocuments);
router.post("/tiposDocumentos", tipoDocumento_controller_1.createTypeDocuments);
router.delete("/tiposDocumentos/:id", tipoDocumento_controller_1.deleteTypeDocument);
router.put("/tiposDocumentos/:id", tipoDocumento_controller_1.updateTipoDocumento);
exports.default = router;