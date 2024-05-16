import { NextFunction, Request, Response } from "express-serve-static-core";

let cartMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //Check If user has access to Cart apis
    console.log('cart middleware')
    next();
  };
  
  export default cartMiddleware;