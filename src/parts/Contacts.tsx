import {pink} from "@mui/material/colors";
import PagePart from "./PagePart.tsx";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Contacts() {
    return (
        <PagePart color={pink[200]} id='contacts'>
            <Container sx={{height: 400}}>
                <Typography variant="h3" align="center">
                    Контакти
                </Typography>
            </Container>
        </PagePart>
    )
}

export default Contacts;
