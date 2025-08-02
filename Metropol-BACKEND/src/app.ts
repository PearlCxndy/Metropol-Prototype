import express from "express";
import routes from "./routes";
import passport from "passport";
import passportStrategy from "./utils/passport";

const app = express();
const PORT = process.env.PORT || 8080;

passportStrategy(passport);
app.use(passport.initialize());

app.use(express.json());

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
  routes(app);
});
