import prisma from "./connect";
import { PassportStatic } from "passport";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";

export default (passport: PassportStatic) => {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY || "jvns",
      },
      async (payload, done) => {
        const user = await prisma.user.findUnique({
          where: {
            user_id: payload.sub,
          },
        });
        try {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );
};
