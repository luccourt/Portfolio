import { Container, Grid, Typography, styled } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AboutIcon from '/Projetos/Portfolio/src/frontend/assets/img/About.gif'


const StyleAbout = styled("div")(() =>({
    minHeight: "100vh"
    }))

const SubTitle = styled(Typography)(() =>({
    color: "white",
    fontFamily: "Work Sans",
    fontWeight: "700",
    marginBottom:"1rem"
}))

const Text = styled(Typography)(() =>({
    color:"white",
    fontFamily: "Work Sans", 
    marginTop:"4rem"
}))

const Icon = styled(PersonIcon)(() =>({
    color: "#7592e4",
    fontSize: "2.5rem"
}))

const About = () => {

    return (
        <StyleAbout>
            <Container>
                <Grid container justifyContent="center">
                    <Grid size={{xs:12, md:10}}>
                        <SubTitle variant="h3"><Icon sx={{ mr: 1 }}/>Sobre</SubTitle>
                        <hr/>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid size={{xs:12, md:6}}>
                        <Text>Desenvolvedor com 1 ano de experiência, com foco no backend. Participei do desenvolvimento e manutenção de aplicações utilizando Python, com integração a banco de dados como MongoDB e MySQL para operações CRUD e tratamento de dados. Também atuei na implementação de funcionalidades em projetos desenvolvidos com Node.js e TypeScript, contribuindo com a construção de APIs RESTful.
                        Busco constantemente aprimorar minhas habilidades técnicas e aprender novas tecnologias, com o objetivo de evoluir profissionalmente e contribuir para o desenvolvimento de soluções escaláveis e de qualidade.</Text>
                    </Grid>
                    <Grid size={{xs:12, md:4}} display="grid" alignItems="center" justifyContent="center">
                        <img src={AboutIcon} alt="AboutIcon" width="250rem"/>
                    </Grid>
                </Grid>
            </Container>
        </StyleAbout>
      )
    }

export default About