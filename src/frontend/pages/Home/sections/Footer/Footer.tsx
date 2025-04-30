import { Container, Grid, Button, styled, Typography, Icon } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const StyleFooter = styled("div")(() =>({
    minHeight: "30vh"
}))

const ButtonStyle = styled(Button)(() =>({
    fontFamily: "Work Sans",
    color:"white"
}))

const Icons = styled(Icon)(() =>({
    backgroundColor:"white",
    borderRadius:"50%",
    width:"2rem",
    height:"2rem",
    padding:"4px",
    color:"#020826",
    marginBottom:"1rem"
}))

const Text = styled(Typography)(() =>({
    fontFamily: "Work Sans",
    color:"white",
    marginTop:"4px",
    marginBottom:"10px",
    marginLeft:"5px"
}))

const Footer = () => {

  return (
    <StyleFooter>
        <Container>
            <Grid container justifyContent="center">
                <Grid size={{xs:12, md:5}} marginTop="0.8rem">
                    <Grid container spacing={{md:1}}>
                        <Icons><HomeIcon/></Icons><Text>Curitiba, Brasil</Text>
                    </Grid>
                    <Grid container spacing={{md:1}}>
                        <Icons><LocalPhoneIcon/></Icons><Text>+55 (48) 9 9118-3189</Text>
                    </Grid>
                    <Grid container spacing={{md:1}}>
                        <Icons><EmailIcon/></Icons><Text>lucasdsbitencourt@gmail.com</Text>
                    </Grid>
                </Grid>
                <Grid size={{xs:12, md:5}}>
                    <Grid>
                        <Text variant="h5">Redes Sociais</Text>
                    </Grid>
                    <Grid>
                        <Text>Siga minhas redes para acompanhar publicações, projetos e atualizações relevantes da minha trajetória profissional.</Text>
                    </Grid>
                    <Grid container spacing={{md:0}}>
                        <Grid>
                            {/* <Link to="about" smooth={true} duration={500}> */}
                            <ButtonStyle>
                                <GitHubIcon sx={{ mr: 1 }}/>
                                Github</ButtonStyle>
                            {/* </Link> */}
                        </Grid>
                        <Grid>
                            {/* <Link to="contact" smooth={true} duration={500}> */}
                            <ButtonStyle>
                                <LinkedInIcon sx={{ mr: 1 }}/>
                                Linkedin</ButtonStyle>
                            {/* </Link> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </StyleFooter>
  )
}

export default Footer  