import React, {useState} from 'react';
import { Layer, Box, Grommet, Button, Collapsible, ResponsiveContext } from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import Navbar from './Navbar.js'
import About from './About.js'
import Contact from './Contact.js'
import Formation from './Formation.js'
import Description from './Description.js'
import Exppro from './Exppro.js'
import background from './background3.png'



const theme = {
global: {
font: {
  family: 'Roboto',
  size: '18px',
  height: '20px',
  colors: 'white',
},
},
};

function App() {
const [showSidebar, setShowSidebar] = useState(false);
const [isSelected, setisSelected] = useState("ABOUT");
return (
<Grommet theme={theme} full>
  <ResponsiveContext.Consumer>
    {size => (
      <Box fill style={{backgroundImage: `url(${background})`}}>
          <Navbar setisSelected={setisSelected} setShowSidebar={setShowSidebar} showSidebar={showSidebar} ></Navbar>
      <Box direction='row' flex overflow={{ horizontal : 'hidden' }}>
        <Box flex align='center' justify='center'>
          {
            isSelected === "ABOUT" ?
            <About ></About>
            : isSelected === "DESCRIPTION" ?
            <Description></Description>
            : isSelected === "FORMATION" ?
            <Formation></Formation>
            :   isSelected === "EXPPRO" &&
            <Exppro></Exppro> 
          }
        </Box>
            {(!showSidebar || size !== 'small') ? (
          <Collapsible direction="horizontal" open={showSidebar}>
          <Box
            flex
            width='medium'
            background='light-1'
            elevation='small'
            align='center'
            justify='center'
          >
            <Contact></Contact>
          </Box>
          </Collapsible>
        ): (
          <Layer>
            <Box
              background='light-1'
              tag='header'
              justify='end'
              align='center'
              direction='row'
              >
            </Box>
            <Box
              fill
              background='light-1'
              align='center'
              justify='center'
              >
                <Contact></Contact>
              </Box>
          </Layer>
        )
        })
        </Box>
      </Box>
    )}
    </ResponsiveContext.Consumer>
</Grommet>
);
}

export default App;
