import { Router } from "express";
import { getAllProducts, getProductDetails } from "../Controllers/ProductsController.js";
import productMiddleware from "../Middlewares/ProductMiddleware.js";

const router = Router();

router.use(productMiddleware);

router.get("/", getAllProducts);

router.get("/:id", getProductDetails);

export default router;