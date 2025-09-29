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
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    //parsing the urls
    const url = req.url;
    const method = req.method;

    if (url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    //to quit execution
    return res.end();
    }
    // process.exit();

    
    if(url === '/message' && method==='POST'){
        const body = [];
        //event listener on data event
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(parsedBody);
            fs.writeFileSync('message.txt', message);
        });
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

    }
    //setting our own header
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first</title></head>');
    res.write('<body><h3>Its interesting to learn node.js</h3></body>');
    res.write('</html>');
    res.end();
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

//Streams and Buffers
