 const fs = require('fs');
 const requestHandler = (req, res) =>{
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
            //split from '=' starting from index 1
            const message = parsedBody.split('=')[1];
            console.log(parsedBody);
            fs.writeFile('message.txt', message, err=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        return;

    }
    //setting our own header
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first</title></head>');
    res.write('<body><h3>Its interesting to learn node.js</h3></body>');
    res.write('</html>');
    res.end();
 };

 module.exports = requestHandler;

 //exporting more than one
 module.exports = {
    handler: requestHandler,
    someText: "This is interesting"
 }
 