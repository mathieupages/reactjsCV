import React from 'react'
import {  Image, Box, Heading, Text, Button } from 'grommet';      
import { Link } from 'react-router-dom';

const Contact = () => {  
    return(
        <Box align="center" justify="center">
            <Box height="small" width="small">
                <Image
                    fit="cover"
                    src="./photo.jpg"
                />
            </Box>
            <Heading level="2" color="Black"> Contact </Heading>
            <Text color="Black" margin="medium">27 mai 1990</Text>

            <Text color="Black" margin="medium">06.75.51.01.41</Text>

            <Text color="Black" margin="medium">pagesmat@gmail.com</Text>

            <Text color="Black" margin="medium"> Permis B vehiculé</Text>
            
            <Button><Heading level="3"><Link to={'/formulaire'} className="nav-link">Me contacter</Link></Heading></Button>
        </Box> 
    )}
                
export default Contact;
                