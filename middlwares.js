const express = require('express');
const bodyParser = require('body-parser');
const admin = require('./routes/admin')
const shop = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(admin);

app.use(shop)

app.use((req, res, next) => {
    res.status(404).send(<h1>Page Not Found</h1>)
});
app.listen(6000, () => {
    console.log("listening on port 6000");
});
