import React from 'react';
import { Nav, Anchor, Box, Text} from 'grommet';
import { Home, Info, ChatOption, Achievement } from 'grommet-icons'

const Navbar = () =>{
    return(
        <Box>
            <Nav align="center" justify="center" direction="row-responsive">
                <Text color="white"><Anchor icon={<Home />} color="white" hoverIndicator /> About </Text>
                <Text color="white"><Anchor icon={<Info />} color="white" hoverIndicator /> Description</Text>
                <Text color="white"><Anchor icon={<Achievement />} color="white" hoverIndicator /> Formation</Text>
                <Text color="white"><Anchor icon={<ChatOption />} color="white" hoverIndicator /> Expérience professionnelle</Text>
            </Nav>
        </Box>
    );
}
export default Navbar;
