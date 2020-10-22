import React from 'react';
import { Nav, Anchor, Box, Text} from 'grommet';
import { Home, Info, ChatOption, Achievement, Contact } from 'grommet-icons'


const Navbar = ({setisSelected}) =>{
    return(
        <Box>
            <Nav align="center" justify="center" direction="row-responsive">
                <Text color="white"><Anchor icon={<Home />} color="white" hoverIndicator onClick={() => setisSelected("ABOUT")} /> About </Text>
                <Text color="white"><Anchor icon={<Info />} color="white" hoverIndicator onClick={() => setisSelected("DESCRIPTION")}/> Description</Text>
                <Text color="white"><Anchor icon={<Achievement />} color="white" hoverIndicator onClick={() => setisSelected("FORMATION")}/> Formation</Text>
                <Text color="white"><Anchor icon={<ChatOption />} color="white" hoverIndicator onClick={() => setisSelected("EXPPRO")}/> Expérience professionnelle</Text>
            </Nav>
        </Box>
    );
}
export default Navbar;
