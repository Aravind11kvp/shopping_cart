import { Router } from "express";
import { getAllProducts, addProduct, modifyProduct, deleteProduct} from "../controllers/CartController.js";
import cartMiddleware from "../Middlewares/CartMiddleware.js";

const router = Router();

router.use(cartMiddleware)

router.get("/", getAllProducts);

router.post("/addproduct", addProduct)

router.put("/modifyproduct/:id", modifyProduct)

router.delete("/deleteproduct/:id", deleteProduct);

export default router;