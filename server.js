let http = require('http');
let fs =require('fs');

console.log("Starting server")

http.createServer((req ,res)=>{
  fs.readFile('response.html' , (err ,data)=>{
    if(!err){
        res.writeHead(200 , {
            "Content-Type": "text/html",
        });
        res.write(JSON.stringify({data}));
        return res.end();
    }
    res.write('error while reading file');
    return res.end();
  })
}).listen(8080);





