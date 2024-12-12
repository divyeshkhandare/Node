const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("index.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
        console.log(data);
      }
    });
  } else if (req.url == "/login") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Login");
  } else if (req.url == "/signup") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("signup");
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Contact");
  } else if (req.url == "/service") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Service");
  }
});

server.listen(8090, () => {
  console.log("Server running on port 8090");
});
