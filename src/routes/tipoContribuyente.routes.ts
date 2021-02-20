import { Router } from "express";
import {
  getTypeContribuyent,
  createTypeContribuyent,
} from "../controllers/tipoContribuyente.controller";

const router = Router();
router.get("/tiposContribuyente", getTypeContribuyent);
router.post("/tiposContribuyente", createTypeContribuyent);

export default router;
