import React from 'react';
import { Nav, Anchor, Box, Text, Button} from 'grommet';
import { Home, Info, ChatOption, Achievement, Contact } from 'grommet-icons'


const Navbar = ({ setisSelected, setShowSidebar, showSidebar}) =>{
    return(
        <Box>
            <Nav align="center" justify="center" direction="row-responsive">
                <Button onClick={() => setisSelected("ABOUT")}><Text color="white"><Anchor icon={<Home />} color="white" hoverIndicator /> About </Text></Button>
                <Button onClick={() => setisSelected("DESCRIPTION")}><Text color="white"><Anchor icon={<Info />} color="white" hoverIndicator /> Description </Text></Button>
                <Button onClick={() => setisSelected("FORMATION")}><Text color="white"><Anchor icon={<ChatOption />} color="white" hoverIndicator /> Formation </Text></Button>
                <Button onClick={() => setisSelected("EXPPRO")}><Text color="white"><Anchor icon={<Achievement />} color="white" hoverIndicator /> Expérience professionnelle </Text></Button>
                <Button onClick={() => setShowSidebar(!showSidebar)}><Text color="white"><Anchor icon={<Contact />} color="white" hoverIndicator /> Contact </Text></Button>
            </Nav>
        </Box>
    );
}
export default Navbar;
