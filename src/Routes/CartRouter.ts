import { Router } from "express";
import { getAllProducts, addProduct, modifyProduct, deleteProduct} from "../Controllers/CartController";
import cartMiddleware from "../Middlewares/CartMiddleware";

const router = Router();

router.use(cartMiddleware)

router.get("/", getAllProducts);

router.post("/", addProduct)

router.put("/:id", modifyProduct)

router.delete("/:id", deleteProduct);

export default router;