let productMiddleware = (req, res, next) => {
    //Check If user has access to Product apis\
    console.log('product middleware')
    next();
  };
  
  export default productMiddleware;