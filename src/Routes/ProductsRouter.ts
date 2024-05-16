import { Router } from "express";
import { getAllProducts, getProductDetails } from "../Controllers/ProductsController";
import productMiddleware from "../Middlewares/ProductMiddleware";

const router = Router();

router.use(productMiddleware);

router.get("/", getAllProducts);

router.get("/:id", getProductDetails);

export default router;