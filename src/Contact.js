import React from 'react'
import {  Image, Box, Heading, Text } from 'grommet';      


const Contact = () => {  
    return(
        <Box align="center" justify="center">
            <Box height="small" width="small">
                <Image
                    fit="cover"
                    src="./photo.jpg"
                />
            </Box>
            <Heading color="Black"> Contact </Heading>
            <Text color="Black">27 mai 1990</Text>

            <Text color="Black">06.75.51.01.41</Text>

            <Text color="Black">pagesmat@gmail.com</Text>

            <Text color="Black"> Permis B vehiculé</Text>
        </Box>
    )}
                
export default Contact;
                