import { Router } from "express";
import {
  getEntities,
  createEntity,
  deleteEntity,
  updateEntity,
} from "../controllers/entidad.controller";

const router = Router();
router.get("/entidad", getEntities);
router.post("/entidad", createEntity);
router.delete("/entidad/:id", deleteEntity);
router.put("/entidad/:id", updateEntity);

export default router;
