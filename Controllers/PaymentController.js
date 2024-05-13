let getAllAddresses = (req, res) => {
    res.send('List of Addresses')
}

let checkout = (req, res) => {
    res.send('Payment Successful');
}

export { getAllAddresses, checkout }