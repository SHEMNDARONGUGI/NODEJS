const express = require('express');
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



app.use('/', (req, res, next)=>{
    res.send('<h1>hello its getting hot</h1>');
    // ....
});

app.listen(PORT, ()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
});

// ======================================
// Installing bodyParser to see body
//=======================================

// pnpm add --save body-parser 

// --save means it going to be used in production

