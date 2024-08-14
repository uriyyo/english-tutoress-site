import {purple} from "@mui/material/colors";
import PagePart from "./PagePart.tsx";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function CourseContent() {
    return (
        <PagePart color={purple[200]} id='course-content'>
            <Container sx={{height: 400}}>
                <Typography variant="h3" align="center">
                    Зміст курсу
                </Typography>
            </Container>
        </PagePart>
    )
}

export default CourseContent;
