import express from "express";
import cors from "cors";
import sendEmail from "./sendEmail";

const app = express();
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use("/api/", sendEmail);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
