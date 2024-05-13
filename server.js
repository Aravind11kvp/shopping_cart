import express from "express";
import ProductsRouter from './Routes/ProductsRouter.js';
import CartRouter from './Routes/CartRouter.js';
import PaymentRouter from './Routes/PaymentRouter.js';

const app = express();
const port = 2000;

app.get('/', function (req, res, next) {
    console.log('Time: %d', Date.now())
    res.send('Online Shopping Portal')
})

app.use('/products', ProductsRouter)
app.use('/cart', CartRouter)
app.use('/payment', PaymentRouter)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
