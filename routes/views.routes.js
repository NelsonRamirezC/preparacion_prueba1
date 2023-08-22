import { Router } from "express";
import * as viewController from "../controllers/views.controllers.js";
import * as jwt from "../middlewares/auth.middlewares.js";
const router = Router();

// VISTA HOME
router.get("/", viewController.home);

// VISTA LOGIN
router.get("/login", viewController.login);


//VISTA DASHBOARD
router.get("/dashboard", jwt.verifyToken, viewController.dashboard);


export default router;
