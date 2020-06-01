import jwt from "jsonwebtoken";

export default class JWTAuth {
  constructor() {}
  key = "token_relax";

  signToken(secretKey: string): string {
    return jwt.sign(
      {
        data: secretKey,
      },
      this.key,
      { expiresIn: 60 * 60 }
    );
  }

  verifyToken(token: string): any {
    return jwt.verify(token, this.key, (err, decoded) => decoded);
  }

  destroyToken(token: string) {
    return jwt.destroy(token);
  }
}
