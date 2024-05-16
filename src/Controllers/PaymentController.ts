import { Request, Response } from "express-serve-static-core";

let getAllAddresses = (req: Request, res: Response) => {
    res.send('List of Addresses')
}

let checkout = (req: Request, res: Response) => {
    res.send('Payment Successful');
}

export { getAllAddresses, checkout }