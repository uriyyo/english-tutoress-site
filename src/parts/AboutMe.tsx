import {pink} from "@mui/material/colors";
import PagePart from "./PagePart.tsx";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function AboutMe() {
    return (
        <PagePart color={pink[200]} id='about-me'>
            <Container>
                <Typography variant="h3" align="center" sx={{paddingBottom: 5}}>
                    Хто я?
                </Typography>
                <Typography variant="h5" align='justify'>
                    I'm a teacher of English. I have been teaching English for 10 years. I have a lot of experience in
                    teaching English to children and adults. I have a lot of experience in preparing students for
                    international exams. I have a lot of experience in teaching English online. I have a lot of
                    experience in teaching English in groups and individually. I have a lot of experience in teaching
                    English in schools and online schools. I have a lot of experience in teaching English in Ukraine and
                    abroad. I have a lot of experience in teaching English in different countries. I have a lot of
                    experience in teaching English in different cities. I have a lot of experience in teaching English
                    in different schools. I have a lot of experience in teaching English in different online schools. I
                    have a lot of experience in teaching English in different groups. I have a lot of experience in
                    teaching English individually.
                </Typography>
            </Container>
        </PagePart>
    )
}

export default AboutMe;
