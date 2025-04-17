import { Container, Grid, Stack, Typography, styled } from "@mui/material";

const StyleHero = styled("div")(() =>({
  height: "100vh",
}))

const Title = styled(Typography)(() =>({
  color: "white",
  fontFamily: "Lexend",
  fontWeight: "500",
  fontSize: "4rem",
  marginBottom: "3rem",
}))

const SubTitle = styled(Typography)(() =>({
  color: "#7592e4",
  fontFamily: "Work Sans",
  fontWeight: "500",
  fontSize: "1.7rem",
  marginTop: "10rem"
}))

const SpanColor = styled('span')(() =>({
  color: "#7592e4"
}))

const Hero = () => {

  return (
    <StyleHero>
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid size={{ xs:12, sm:7}}>
            <Stack>
              <SubTitle variant="h2">Olá, me chamo</SubTitle>
              <Title variant="h1">Lucas Bitencourt</Title>
              <Typography color="white" fontFamily= "Work Sans">Sou estudante de <SpanColor>Análise e Desenvolvimento de Sistemas</SpanColor> na <SpanColor>Unicesumar</SpanColor>, atualmente no <SpanColor>5º período</SpanColor>, com foco em me especializar como desenvolvedor Full Stack. Trabalho com desenvolvimento de APIs, bancos de dados e aplicações web. Estou sempre em busca de novos aprendizados, do backend ao frontend, sempre buscando aprender e evoluir como desenvolvedor.</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyleHero>
  )
}

export default Hero
  