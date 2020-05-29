import express from "express";
import bodyParser from "body-parser";
import RouterAuthentication from "./authentication/router";

class App {
  public app: express.Application;
  public router: express.Router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.config();
    this.intRouter();
  }

  private intRouter() {
    new RouterAuthentication(this.app).intRouter();
  }

  private config(): void {
    // Giúp chúng ta tiếp nhận dữ liệu từ body của request
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
