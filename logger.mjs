// Import the built-in 'EventEmitter' module
import { EventEmitter } from "node:events";

// Set the URL for the logger
let url = "http://mylogger.io/log";

// Create a custom logger class that extends EventEmitter
class Logger extends EventEmitter {
  // Define a 'log' method that takes a message parameter
  log(message) {
    // Log the message to the console
    console.log(message);

    // Emit a 'messageLogged' event with an object containing an ID and URL
    this.emit("messageLogged", { id: 1, url: "http://" });

    // Emit a 'Logging' event with an object containing the data parameter
    this.emit("Logging", { data: "message" });
  }
}

// Export the Logger class as the default export
export default Logger;
