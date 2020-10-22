import React, {useState} from 'react';
import { Layer, Box, Grommet, Button, Collapsible, ResponsiveContext } from 'grommet';
import Navbar from './Navbar.js'
import About from './About.js'
import Contact from './Contact.js'
import Formation from './Formation.js'
import Description from './Description.js'
import Exppro from './Exppro.js'
import background from './background4.jpg'



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
            background={{ color: "light-1", opacity: "0.7" }}
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
              background={{ color: "light-1", opacity: "0.7" }}
              tag='header'
              justify='end'
              align='center'
              direction='row'
              >
            </Box>
            <Box
              fill
              background={{ color: "light-1", opacity: "0.7" }}
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
