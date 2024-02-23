const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/add-product', (req, res) => {
    res.send('<form action="/add-product" method="POST">' +
                '<input type="text" name="productName" placeholder="Product Name">' +
                '<input type="text" name="productSize" placeholder="Product Size">' +
                '<button type="submit">Add Product</button>' +
            '</form>');
});


app.post('/add-product', (req, res) => {
    const productName = req.body.productName;
    const productSize = req.body.productSize;

    console.log("Product Name:", productName);
    console.log("Product Size:", productSize);

    res.send('Product added successfully!');
});

app.listen(6000, () => {
    console.log("listening on port 6000");
});
