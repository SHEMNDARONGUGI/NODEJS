const express = require('express');
const Router = express.Router();

app.use('/add-product', (req, res, next)=>{
    console.log('In another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><br><br><input type="number" name="price"><br><br><button type="submit">Submit</button></form>');
    // ...
});

app.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/')
});