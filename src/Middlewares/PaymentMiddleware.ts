import { NextFunction, Request, Response } from "express-serve-static-core";

let paymentMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //Check If user has access to Payment apis
    console.log('Payments middleware');
    next();
  };
  
  export default paymentMiddleware;