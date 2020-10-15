import React from 'react';
import { Nav, Anchor, Box, Text} from 'grommet';
import { Home, Info, ChatOption, Achievement } from 'grommet-icons'

const Navbar = () =>{
    return(
        <Box>
            <Nav align="center" justify="center" direction="row-responsive">
                <Text><Anchor icon={<Home />} hoverIndicator /> About </Text>
                <Text><Anchor icon={<Info />} hoverIndicator /> Description</Text>
                <Text><Anchor icon={<Achievement />} hoverIndicator /> Formation</Text>
                <Text><Anchor icon={<ChatOption />} hoverIndicator /> Expérience professionnelle</Text>
            </Nav>
        </Box>
    );
}
export default Navbar;
