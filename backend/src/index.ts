import express from "express";
import routes from "../routes";
import cors from "cors";
import DB from "./db";

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

DB();

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}! `);
});
