import express from "express";
import { Application, Request, Response } from "express-serve-static-core";
import ProductsRouter from './Routes/ProductsRouter';
import CartRouter from './Routes/CartRouter';
import PaymentRouter from './Routes/PaymentRouter';

const app: Application = express();
const port: number = 2000;

app.get('/', function (req: Request, res: Response) {
    console.log('Time: %d', Date.now())
    res.send('Online Shopping Portal')
})

app.use('/products', ProductsRouter)
app.use('/cart', CartRouter)
app.use('/payment', PaymentRouter)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
