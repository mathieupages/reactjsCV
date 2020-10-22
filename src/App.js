import React, {useState} from 'react';
import {Box, Grommet} from 'grommet';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home.js'
import background from './background.jpg'
import Formulaire from './Form/Formulaire.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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
console.log("isSelected : " + isSelected)
return (
<Grommet theme={theme} full>
      <Box fill style={{backgroundImage: `url(${background})`}}>
        <Navbar setisSelected={setisSelected} setShowSidebar={setShowSidebar} showSidebar={showSidebar} ></Navbar>
      <Router>
          <Switch>
          <Route exact path="/" component={() => <Home isSelected={isSelected} showSidebar={showSidebar} />} />
          <Route exact path="/formulaire" component={() => <Formulaire />} />
          </Switch>      
      </Router>
      </Box>
</Grommet>
);
}

export default App;
