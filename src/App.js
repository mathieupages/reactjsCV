import React, {useState} from 'react';
import { Layer, Box, Grommet, Heading, Button, Collapsible, ResponsiveContext, Image } from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import Navbar from './Navbar.js'
import Background from './background.png'



const theme = {
global: {
colors : {
    background: Background,
},
font: {
  family: 'Roboto',
  size: '18px',
  height: '20px',
},
},
};

function App() {
const [showSidebar, setShowSidebar] = useState(false);
return (
<Grommet theme={theme} full>
  <ResponsiveContext.Consumer>
    {size => (
        <Box fill>
      <Navbar>test</Navbar>
        <Heading level='3' margin='non'>My App</Heading>
        <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />
      <Box direction='row' flex overflow={{ horizontal : 'hidden' }}>
        <Box flex align='center' justify='center'>
          app body
        </Box>
        {(!showSidebar || size !== 'small') ? (
          <Collapsible direction="horizontal" open={showSidebar}>
          <Box
            flex
            width='medium'
            background='light-2'
            elevation='small'
            align='center'
            justify='center'
          >
            sidebar
          </Box>
          </Collapsible>
        ): (
          <Layer>
            <Box
              background='light-2'
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
              background='light-2'
              align='center'
              justify='center'
              >
                sidebar
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
