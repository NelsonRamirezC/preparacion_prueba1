import { Router } from "express";
import * as productsController from "../controllers/products.controllers.js";
import * as jwt from "../middlewares/auth.middlewares.js";
const router = Router();

// ENDPOINT LOGIN (AUTENTICACIÓN)
router.get("/", jwt.verifyToken, productsController.findAll);

export default router;
