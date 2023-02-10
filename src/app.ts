import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import router from "./routes/routes";
dotenv.config();

connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Is Running"); 
});

app.use('/users', router);

const PORT = process.env.PORT || 3000;

export const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT} `);
});
