const express = require('express');

const app = express();

app.use((req, res, next)=>{
    res.send('<h3>Shem is getting the hang of this</h3>')
});

app.listen(8020, ()=>{
    console.log("Now you are understanding you human: http://localhost:8020");
})