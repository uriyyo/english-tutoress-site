import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Container} from "@mui/material";
import {red} from '@mui/material/colors';
import {useCallback} from "react";

const PAGES = [
    {
        name: 'ГОЛОВНА',
        id: 'main',
    },
    {
        name: 'ПРО МЕНЕ',
        id: 'about-me',
    },
    {
        name: 'ЗМІСТ НАВЧАННЯ',
        id: 'course-content',
    },
    {
        name: 'ДЛЯ КОГО НАВЧАННЯ',
        id: 'for-whom',
    },
    {
        name: 'КОНТАКТИ',
        id: 'contacts',
    },
]

function NavBar() {
    const scrollTo = useCallback((id: string) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({block: 'start', behavior: 'smooth'});
        }
    }, []);

    return (
        <Container maxWidth="lg" sx={{display: {xs: 'none', md: 'flex'}}}>
            <AppBar position="fixed" sx={{backgroundColor: red[300]}}>
                <Toolbar>
                    <Box sx={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                        {PAGES.map((({name, id}) => (
                            <Typography onClick={() => scrollTo(id)} key={id} variant="h6">
                                {name}
                            </Typography>
                        )))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default NavBar;