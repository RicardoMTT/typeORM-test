import { Router } from "express";
import { login, createUser, users } from "../controllers/user.controller";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";

const router = Router();
router.post("/login", login);
router.post("/register", [checkJwt, checkRole(["Admin"])], createUser); // Solo personas con role admin
router.get("/users", [checkJwt], users);

export default router;
