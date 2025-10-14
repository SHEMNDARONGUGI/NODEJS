const path = require('path');
const express = require('express');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

const PORT = 8001;

const app = express();

// use allows us to add a new middleware function
// next is a function which allows the request to travel to the next middleware
// app.use('/',(req, res, next)=>{
//     console.log("This always runs");
//     next();
// });

//does the parsing
app.use(bodyParser.urlencoded({extended: false}));
//serving css statically
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

//404 error page

app.use((req,res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'pagenotfound.html'));
});

app.listen(PORT, ()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
});

// ======================================
// Installing bodyParser to see body
//=======================================

// pnpm add --save body-parser 

// --save means it going to be used in production

