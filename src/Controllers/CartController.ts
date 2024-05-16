import { Request, Response } from "express-serve-static-core";

interface CartData {
  product_name: string;
  price: number;
  quantity: number;
  product_id: number;
}

let data: CartData[] = [
    {
      product_id: 1,
      product_name: "Product 1",
      quantity: 2,
      price: 23,
    },
    {
      product_id: 2,
      product_name: "Product 2",
      quantity: 4,
      price: 394,
    },
    {
      product_id: 3,
      product_name: "Product 3",
      quantity: 3,
      price: 2231,
    },
];

let getAllProducts = (req: Request, res: Response) => {
    res.json({
        data
    });
}

let addProduct = (req: Request, res: Response) => {
    res.json(req.body);
}

let modifyProduct = (req: Request, res: Response) => {
    res.json(req.body);
}

let deleteProduct = (req: Request, res: Response) => {
    res.json({message: "Record Succesfully Deleted"});
}

export { getAllProducts, addProduct, modifyProduct, deleteProduct};