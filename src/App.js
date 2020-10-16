import React, {useState} from 'react';
import { Layer, Box, Grommet, Heading, Button, Collapsible, ResponsiveContext, Image } from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import Navbar from './Navbar.js'
import About from './About.js'
import Contact from './Contact.js'
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
const [showSidebar, setShowSidebar] = useState(true);
return (
<Grommet theme={theme} full>
  <ResponsiveContext.Consumer>
    {size => (
      <Box fill style={{backgroundImage: `url(${background})`}}>
      <Navbar></Navbar>
        <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />
      <Box direction='row' flex overflow={{ horizontal : 'hidden' }}>
        <Box flex align='center' justify='center'>
          <About></About>
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
              <Button
                icon={<FormClose />}
                onClick={() => setShowSidebar(false)}
                />
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
