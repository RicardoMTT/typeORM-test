"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("../controllers/user.controller");
var jwt_1 = require("../middleware/jwt");
var role_1 = require("../middleware/role");
var router = express_1.Router();
router.post("/login", user_controller_1.login);
router.post("/register", [jwt_1.checkJwt, role_1.checkRole(["Admin"])], user_controller_1.createUser); // Solo personas con role admin
router.get("/users", [jwt_1.checkJwt], user_controller_1.users);
exports.default = router;
