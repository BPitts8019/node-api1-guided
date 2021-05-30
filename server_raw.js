const http = require("http");

const server = http.createServer((req, res) => {
   //use "req" to get information about the http request
   //use "res" to send information back to the browser
   res.statusCode = 200;
   res.setHeader("Content-Type", "text/html");
   res.write("<h1>Hello World</h1>");
   res.end();
});

server.listen(8080, () => {
   console.log("Server started...");
});
