const express = require("express");
const cors = require("cors");
const { dbConection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = "/api/users";

    //Connect to DB
    this.connectDB();

    // Middlewares
    this.middlewares();

    // App routes
    this.routes();
  }

  async connectDB(){
    await dbConection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Read and parse of the body
    this.app.use(express.json());

    //Public deirectory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
