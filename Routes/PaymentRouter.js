import { Router } from "express";
import { getAllAddresses, checkout } from "../controllers/PaymentController.js";
import paymentMiddleware from "../Middlewares/PaymentMiddleware.js";

const router = Router();

router.use(paymentMiddleware)

router.get("/addresses", getAllAddresses);

router.post("/checkout", checkout);

export default router;