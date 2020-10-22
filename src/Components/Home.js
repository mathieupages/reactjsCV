import React from 'react';
import About from './About.js'
import Contact from './Contact.js'
import Formation from './Formation.js'
import Description from './Description.js'
import Exppro from './Exppro.js'
import { Layer, Box, Collapsible, ResponsiveContext } from 'grommet';

const Home = ({ isSelected, showSidebar }) => {
    return (
        <ResponsiveContext.Consumer >
        {size => (
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align='center' justify='center'>
                {
                    isSelected === "ABOUT" ?
                        <About ></About>
                        : isSelected === "DESCRIPTION" ?
                            <Description></Description>
                            : isSelected === "FORMATION" ?
                                <Formation></Formation>
                                : isSelected === "EXPPRO" &&
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
            ) : (
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
        )}
        </ResponsiveContext.Consumer >
    )
}

export default Home;