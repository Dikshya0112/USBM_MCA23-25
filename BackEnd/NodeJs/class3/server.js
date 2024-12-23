const http = require("http")
const os = require("os")
const path = require("path")
const fs = require("fs")

//Create server
const server = http.createServer((req,res)=>{
if(req.url == '/'){
res.writeHead(201)
res.end('success')
}
else if(req.url == '/home'){
    res.writeHead(201)
    res.end('home')
}
else if(req.url == '/contact'){
    res.writeHead(201)
    res.end('contact')
}else if(req.url == '/service'){
    res.writeHead(201)
    res.end('service')
}else if(req.url == '/signUp'){
    res.writeHead(201)
    res.end('signUp')
}else{
res.writeHead(404)
res.end('not found')
}
})
server.listen(3000,()=>{
    console.log('server is running at 3000');
    
})

//todo : home pae, contct page, service page , signup page
// if no page found - 404 not found