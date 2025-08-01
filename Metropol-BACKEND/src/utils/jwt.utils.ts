import jwt from "jsonwebtoken";

export function issueJWT(user: any) {
  const _id = user.user_id;

  const expiresIn = "1d";

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jwt.sign(payload, process.env.SECRET_KEY as string, {
    expiresIn: expiresIn,
  });

  return { token: "Bearer " + signedToken, expires: expiresIn };
}
