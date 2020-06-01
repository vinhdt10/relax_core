import express from "express";
import JWTAuth from "../../lib/jwt";
import _ from "lodash";

export default class RouterApp {
  public app: express.Application;
  public jwtAuth = new JWTAuth();
  constructor(public _app: express.Application) {
    this.app = _app;
  }

  public intRouter(): void {
    this.app.use("/app", (req, res, next) => {
      this.checkAuthentication(req, res, next);
    });

    this.app.use("/app/information", (req, res) => {
      let user = _.get(req, "res.user");
      res.send(user);
    });
  }

  private checkAuthentication(req, res, next: Function): void {
    let token = _.get(req, "headers.authorization");
    let info = this.jwtAuth.verifyToken(token);
    if (_.isEmpty(info) || !token) {
      return res.sendStatus(401);
    }

    res.user = {
      username: _.split(info.data, "_"),
    };

    next();
  }
}
