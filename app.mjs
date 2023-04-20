// Import the built-in 'http' module
import http from "http";

// Create an HTTP server using the 'createServer' method
const server = http.createServer((req, res) => {
  // If the request URL is '/', respond with 'Hello World'
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  // If the request URL is '/api/courses', respond with a JSON string
  // containing an array of course IDs
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// Register a listener for the 'connection' event on the server object
server.on("connection", (socket) => {
  console.log("New connection...");
});

// Start listening for incoming requests on port 3000
server.listen(3000);

// Log a message to the console indicating that the server is listening on port 3000
console.log("Listening on port 3000...");
