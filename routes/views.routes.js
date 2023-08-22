import { Router } from "express";
import * as viewController from "../controllers/views.controllers.js";
const router = Router();

// VISTA HOME
router.get("/", viewController.home);

// VISTA LOGIN
router.get("/login", viewController.login);


//VISTA DASHBOARD


export default router;
