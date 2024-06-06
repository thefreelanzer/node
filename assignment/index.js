const http = require("node:http");
const fs = require("node:fs");
const deleteFiles = require("./delete-files");
const Logging = require("./logging");

const logging = new Logging();

const server = http.createServer((req, res) => {
  const aboutMe = {
    name: "Jane Doe",
    age: 30,
    gender: "Female",
    contact: {
      email: "jane.doe@example.com",
      phone: "+1234567890",
    },
    address: {
      street: "123 Main Street",
      city: "Anytown",
      state: "Anystate",
      postalCode: "12345",
      country: "USA",
    },
    occupation: "Software Engineer",
    skills: ["JavaScript", "Python", "Java", "React", "Node.js", "SQL"],
    education: {
      degree: "Bachelor of Science in Computer Science",
      institution: "Anytown University",
      yearOfGraduation: 2016,
    },
    hobbies: ["Reading", "Hiking", "Photography", "Traveling"],
  };

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to our system");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(aboutMe));
      break;
    case "/echo":
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
        console.log(body);
      });

      req.on("end", () => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(body));
      });
      break;
    case "/read-file":
      res.writeHead(200, { "Content-Type": "text/plain" });
      fs.createReadStream("./file.txt").pipe(res);
      break;
    case "/delete-files":
      deleteFiles("temp");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Files are deleted successfully");
      break;
    case "/logging":
      logging.logError("This is an error message!");
      logging.logInfo("This is an informational message!");
      logging.logWarning("This is a warning message!");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Logging!");
      break;
    default:
      res.writeHead(404);
      res.end("Page not found!");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server running on port number 3000");
});
