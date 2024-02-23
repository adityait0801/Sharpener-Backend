const express = require('express');
const router = express.Router();

app.get('/add-product', (req, res, next) => {
    res.send('<form action="/add-product" method="POST"><input type="text" name="productName" placeholder="Product Name"><button type="submit">Add Product</button></form>');
});


app.post('/product', (req, res) => {

    console.log(req.body);
    res.redirect('/');
});

module.exports = router;

