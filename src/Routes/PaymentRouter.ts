import { Router } from "express";
import { getAllAddresses, checkout } from "../Controllers/PaymentController";
import paymentMiddleware from "../Middlewares/PaymentMiddleware";

const router = Router();

router.use(paymentMiddleware)

router.get("/addresses", getAllAddresses);

router.post("/checkout", checkout);

export default router;