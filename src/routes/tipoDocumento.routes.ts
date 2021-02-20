import { Router } from "express";
import {
  getTypeDocuments,
  createTypeDocuments,
  deleteTypeDocument,
  updateTipoDocumento,
} from "../controllers/tipoDocumento.controller";

const router = Router();
router.get("/tiposDocumentos", getTypeDocuments);
router.post("/tiposDocumentos", createTypeDocuments);
router.delete("/tiposDocumentos/:id", deleteTypeDocument);
router.put("/tiposDocumentos/:id", updateTipoDocumento);

export default router;
