import { Router } from "express";
import * as loginController from "../controllers/login.controllers.js";
const router = Router();

// ENDPOINT LOGIN (AUTENTICACIÓN)
router.post("/login", loginController.login);


export default router;
