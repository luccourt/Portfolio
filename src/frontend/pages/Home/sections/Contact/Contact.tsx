import { useState } from "react";
import axios from "axios";
import { Button, Container, Grid, Box, TextField,  Typography, styled } from "@mui/material";
import EmailIcon from '@mui/icons-material/AlternateEmailRounded';

const StyleAbout = styled("div")(() =>({
  minHeight: "100vh"
  }))

const SubTitle = styled(Typography)(() =>({
  color: "white",
  fontFamily: "Work Sans",
  fontWeight: "700",
  marginBottom:"1rem"
}))

const Icon = styled(EmailIcon)(() =>({
  color: "#7592e4",
  fontSize: "2.5rem"
}))

const Submit = styled(Button)(() =>({
  fontFamily:"Work Sans",
  backgroundColor: "#7592e4",
  color: "#fff",
  borderRadius: "8px",
  width: "100%",
  height: "3.5rem"
}))

const InputForm = styled(TextField)(() =>({
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: "3px",
  width: "100%",
  marginBottom: "0.5rem"
}))

const InputMessage = styled(TextField)(() =>({
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: "3px",
  width: "100%",
  marginBottom: "0.5rem"
}))


const Contact = () => {
  const [form, setForm] = useState({ assunto: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/send-email", form);
      alert("Mensagem enviada com sucesso!");
    } catch (err) {
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <StyleAbout>
      <Container>
        <Grid container justifyContent="center" marginBottom="5rem">
          <Grid size={{xs:12, md:10}}>
            <SubTitle variant="h3"><Icon sx={{ mr: 1 }}/>Contato</SubTitle>
            <hr/>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid size={{xs:12, md:6}}>
            <form onSubmit={handleSubmit}>
              <InputForm label="Email" variant="filled" type="email" name="email" onChange={handleChange} required/>
              <InputForm label="Assunto" variant="filled" type="text" name="assunto" onChange={handleChange} required/>
              <InputMessage id="outlined-multiline-static" label="Mensagem" variant="filled" name="message" multiline rows={7} onChange={handleChange} required/>
              <Box display="flex" justifyContent="center">
                <Submit type="submit">Enviar</Submit>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </StyleAbout>
  );
};

export default Contact;
