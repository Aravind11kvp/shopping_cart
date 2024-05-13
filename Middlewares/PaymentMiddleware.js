let paymentMiddleware = (req, res, next) => {
    //Check If user has access to Payment apis
    console.log('Payments middleware');
    next();
  };
  
  export default paymentMiddleware;