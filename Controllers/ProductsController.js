
let data = [
    {
      product_id: 1,
      product_name: "Product 1",
      price: 23,
    },
    {
      product_id: 2,
      product_name: "Product 2",
      price: 394,
    },
    {
      product_id: 3,
      product_name: "Product 3",
      price: 2231,
    },

];


let getAllProducts = (req, res) => {
    res.json({
        data
    });
}

let getProductDetails = (req, res) => {
    let id = req.params.id;
    let product = data.find((item) => item.product_id == id);
    res.json(product);
}

export { getAllProducts, getProductDetails };