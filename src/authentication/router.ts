import express from "express";

export default class RouterAuthentication {
  router: express.Router = express.Router();
  app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
  }

  intRouter(): express.Application {
    this.checkLogin();
    return this.app;
  }

  private checkLogin(): void {
    console.log("dasdasdas");

    this.app.use("/", (req, res) => {
      console.log("dasdasdas1111");
      res.json({
        message: "Hello World!",
      });
    });
  }
}
