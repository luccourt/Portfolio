import { Container, Grid, AppBar, Toolbar, Button, styled } from "@mui/material";
import Logo from '/Projetos/Portfolio/public/img/LUCCOURT_icon.png'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
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

const IconContact = styled(ConnectWithoutContactIcon)(() =>({
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
                      <IconContact sx={{ mr: 0.1 }}/>
                      email</ButtonStyle>
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
  