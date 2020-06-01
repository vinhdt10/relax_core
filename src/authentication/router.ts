import express from "express";
import JWTAuth from "../lib/jwt";
import _ from "lodash";

export default class AuthenticationLogin {
  public app: express.Application;
  public jwtAuth = new JWTAuth();
  constructor(public _app: express.Application) {
    this.app = _app;
  }

  public intRouter(): void {
    this.app.post("/login", (req, res) => {
      let body = req.body;
      let token = this.jwtAuth.signToken(
        _.join([body.username, body.password], "_")
      );
      let result = {
        username: body.username,
        token: token,
      };
      res.send(result);
    });

    this.app.get("/logout", (req, res) => {
      let token = _.get(req, "headers.authorization");
      //   this.jwtAuth.destroyToken(token);

      res.send("LOGOUT_OK");
    });
  }
}
