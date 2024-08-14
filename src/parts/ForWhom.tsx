import {red} from "@mui/material/colors";
import PagePart from "./PagePart.tsx";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function ForWhom() {
    return (
        <PagePart color={red[200]} id='for-whom'>
            <Container sx={{height: 400}}>
                <Typography variant="h3" align="center">
                    Для кого?
                </Typography>
            </Container>
        </PagePart>
    )
}

export default ForWhom