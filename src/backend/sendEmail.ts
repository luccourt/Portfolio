import nodemailer from "nodemailer";
import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/send-email", async (req: Request, res: Response) => {
  console.log("DADOS RECEBIDOS:", req.body);
  const { assunto, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lucasdsbitencourt@gmail.com",
      pass: "ubjh bafg djsx maiw",
    },
  });

  const mailOptions = {
    from: email,
    to: "lucasdsbitencourt@gmail.com",
    subject: `Mensagem de ${email}`,
    html: `
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${assunto}</p>
      <p><strong>Mensagem:</strong><br/>${message}</p>
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao enviar email." });
  }
});

export default router;
