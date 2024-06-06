const http = require("node:http");
const file = require("node:fs");

const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.writeHead(200, { "Content-Type": "text/plain" });

  const user = {
    first_name: "John",
    last_name: "Doe",
  };

  //   let html = file.readFileSync("./index.html", "utf-8");
  //   html = html.replace("{{name}}", `${user.first_name} ${user.last_name}`);
  //   file.ReadStream("./index.html").pipe(res);
  //   file.ReadStream(__dirname + "/index.html").pipe(res);
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end(html);
  //   res.end(JSON.stringify(user));

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world!");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page!");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404);
    res.end("Page not found!");
  }
});

server.listen(3000, () => {
  console.log("Server running in port number 3000");
});
