let cartMiddleware = (req, res, next) => {
    //Check If user has access to Cart apis
    console.log('cart middleware')
    next();
  };
  
  export default cartMiddleware;