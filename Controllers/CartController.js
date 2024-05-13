let data = [
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

let getAllProducts = (req, res) => {
    res.json({
        data
    });
}

let addProduct = (req, res) => {
    res.json(req.body);
}

let modifyProduct = (req, res) => {
    res.json(req.body);
}

let deleteProduct = (req, res) => {
    res.json({message: "Record Succesfully Deleted"});
}

export { getAllProducts, addProduct, modifyProduct, deleteProduct};