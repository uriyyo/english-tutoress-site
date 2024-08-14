import NavBar from "./NavBar.tsx";
import MainPart from "./parts/MainPart.tsx"
import Box from "@mui/material/Box";
import AboutMe from "./parts/AboutMe.tsx";
import CourseContent from "./parts/CourseContent.tsx";
import ForWhom from "./parts/ForWhom.tsx";
import Contacts from "./parts/Contacts.tsx";


function App() {
    return (
        <Box>
            <NavBar/>
            <Box>
                <MainPart/>
                <AboutMe/>
                <CourseContent/>
                <ForWhom/>
                <Contacts/>
            </Box>
        </Box>
    )
}

export default App
