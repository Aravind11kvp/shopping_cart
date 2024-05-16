import { NextFunction, Request, Response } from "express-serve-static-core";

let productMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //Check If user has access to Product apis\
    console.log('product middleware')
    next();
  };
  
  export default productMiddleware;