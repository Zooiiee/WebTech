//To Design a Simple javaScript program  to create a HTTP Server using http module in node js. 
//& use upper-case to print text in uppercase

var h = require('http');
import("upper-case").then( uc=> {
h.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type': 'text/html'});
    if(req.url=='/')
    {
        res.write(uc.upperCase("<html><body><h1 style='color:red'>Home Page</h1></body></html>"));
    }
    else if(req.url=='/student')
    {
        res.write(uc.upperCase("<html><body><h1 style='color:purple'>Student Page</h1></body></html>"));
    }
    res.end();
}).listen(8000);
})
