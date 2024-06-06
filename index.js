const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world!");
});

server.listen(3000, () => {
  console.log("Server running in port number 3000");
});
