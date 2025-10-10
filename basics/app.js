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
const routes = require('./routes');

const server = http.createServer(routes);

// will keep on listening for request
server.listen(PORT, ()=>{
    console.log(`Server is running on: https://localhost:${PORT}`);
});


// function rqListener(req, res){

// }

//anonymous function
// http.createServer(function(req, res){

// });

//Node.js program Lifesycle

// node app.js => start script => Parse Code, Register Variables and Functions => The Node Application [Event Loop] > Keeps on running as long as there are event listeners registered

//Streams and Buffers


// ==================================================
// FIXING ERRORS
//===================================================
//1. Syntax error - easy to fix (caused by typos)
//2. Runtime Errors - not typos but break when they run
//3. Logical Errors - app doesn't work how it should