import React from 'react'
import {  Image, Box, Heading } from 'grommet';      


const Contact = () => {  
    return(
        <Box>
            <Box height="small" width="small">
                <Image
                    fit="cover"
                    src="./photo.jpg"
                />
            </Box>
            <Heading > Contact </Heading>
            <p>
                27 mai 1990
            </p>
            <p>
                06.75.51.01.41
            </p>
            <p>
                pagesmat@gmail.com
            </p>
            <p>
                Permis B vehiculé
            </p>
        </Box>
    )}
                
export default Contact;
                