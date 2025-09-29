// core modules
// Http => Launch a server, send requests
// Https => Launch a SSL server
// fs 
// os 
// path
// Creating a node server
//Import functionality
const PORT = 3000;
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    // process.exit();
});

// will keep on listening for request
server.listen(PORT);


// function rqListener(req, res){

// }

//anonymous function
// http.createServer(function(req, res){

// });

//Node.js program Lifesycle

// node app.js => start script => Parse Code, Register Variables and Functions => The Node Application [Event Loop] > Keeps on running as long as there are event listeners registered
