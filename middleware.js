const express = require('express')

const app = express()

app.use((req, res, next)=> {
    console.log("In the Middleware");
    next();
})

app.use((req, res, next)=> {
    console.log("<h1>Hello From Express.js</h1>");
    next();
})

app.get("/", (req, res)=> {
    res.send("This the home page");
})

app.listen(8500, ()=> {
    console.log("listening on port 8500");
})