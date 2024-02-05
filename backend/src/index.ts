import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
