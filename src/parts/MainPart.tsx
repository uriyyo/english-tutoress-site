import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import PagePart from "./PagePart.tsx";
import {red} from "@mui/material/colors";
import imgUrl from '/src/assets/img/main.png';

function ProfileImage() {
    return (
        <Container sx={{display: 'flex'}}>
            <img
                style={{borderRadius: 20, maxWidth: 600, width: "100%", alignSelf: 'center'}}
                src={imgUrl}
                alt='main'
            />
        </Container>
    );
}

function MainPart() {
    return (
        <PagePart color={red[200]} id='main'>
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-around',
                verticalAlign: 'middle',
                flexDirection: {xs: 'column-reverse', sm: 'row'}
            }}>
                <ProfileImage/>
                <Container sx={{alignSelf: 'center'}}>
                    <Typography variant="h2" alignSelf="center" align="center">Анна Наврузова</Typography>
                    <Typography variant="h4" alignSelf="center" align="center">Викладач англійської мови</Typography>
                </Container>
            </Container>
        </PagePart>
    );
}

export default MainPart;
