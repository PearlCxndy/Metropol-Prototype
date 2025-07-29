import express from "express";
import routes from "./routes";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.listen(PORT, () => {
	console.log(`App is running on http://localhost:${PORT}`);
	routes(app);
});
