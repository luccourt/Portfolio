import { Container, Grid, AppBar, Toolbar, Button, styled } from "@mui/material";
import Logo from '/Projetos/Portfolio/src/frontend/assets/img/LUCCOURT_icon.png'
import EmailIcon from '@mui/icons-material/AlternateEmailRounded';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';

const ButtonStyle = styled(Button)(() =>({
  fontFamily: "Work Sans",
  color:"white"
}))

const IconPerson = styled(PersonIcon)(() =>({
  color: "#7592e4"
}))

const IconCode = styled(CodeIcon)(() =>({
  color: "#7592e4"
}))

const IconEmail = styled(EmailIcon)(() =>({
  color: "#7592e4"
}))

const Header = () => {

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#020826' }}>
      <Toolbar>
        <Container>
          <Grid container justifyContent="space-between">
            <Grid>
              <img src={Logo} alt="ComputerIcon"/>
            </Grid>
            <Grid>
              <Grid container spacing={{md:0}}>
                <Grid>
                  {/* <Link to="about" smooth={true} duration={500}> */}
                    <ButtonStyle>
                      <IconPerson sx={{ mr: 0.1 }}/>
                      Sobre</ButtonStyle>
                  {/* </Link> */}
                </Grid>
                <Grid>
                  {/* <Link to="projects" smooth={true} duration={500}> */}
                    <ButtonStyle>
                      <IconCode sx={{ mr: 0.1 }}/>
                      Projeto</ButtonStyle>
                  {/* </Link> */}
                </Grid>
                <Grid>
                  {/* <Link to="contact" smooth={true} duration={500}> */}
                    <ButtonStyle>
                      <IconEmail sx={{ mr: 0.1 }}/>
                      contato</ButtonStyle>
                  {/* </Link> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
  