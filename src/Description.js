import React from 'react';
import { Card, CardHeader, CardBody, Text, CardFooter, Anchor, Heading, Meter } from 'grommet';
import { Facebook, Instagram, Linkedin, Github } from 'grommet-icons'

const Description = () => {
    return (
        <Card height="large" width="large"  background={{color:"light-1", opacity:"0.7"}}>
            <CardHeader align='center' justify='center' pad="xsmall"><Heading level="2">Description</Heading></CardHeader>
            <CardBody align='center' pad="xsmall">
                <Heading level="3">Divers</Heading>
                <Heading level="4">Sport</Heading>
                    <Text margin="small">
                    Pelote Basque, championnat de France, Randonnée
                    </Text>
                <Heading level="4">Danse</Heading>
                <Text margin="small">
                    Salsa, Bachata, Kizomba
                    </Text>
                <Heading level="4">Lecture</Heading>
                <Text>style fantastique</Text>
                <Heading level="3">Langues</Heading>
                <Text>Français</Text>
                <Meter
                    values={[{
                        value: 90,
                        label: 'sixty',
                        color: 'neutral-3',
                        bacground:'red',
                        onClick: () => { }
                    }]}
                    aria-label="Français"
                />
                <Text>Anglais</Text>
                <Meter
                    values={[{
                        value: 30,
                        label: 'sixty',
                        color: 'neutral-3',
                        onClick: () => { }
                    }]}
                    aria-label="Anglais"
                />
            </CardBody>
            <CardFooter background="light-0" justify="center">
                <a href="https://www.facebook.com/mathieu.pages.92"><Anchor icon={<Facebook />} color="Black" hoverIndicator /></a>
                <a href="https://www.instagram.com/pagesmathieu/?hl=fr"><Anchor icon={<Instagram />} color="Black" hoverIndicator /></a>
                <a href="https://www.linkedin.com/in/pagesmathieu/"><Anchor icon={<Linkedin />} color="Black" hoverIndicator /></a>
                <a href="https://github.com/mathieupages/reactjsCV"><Anchor icon={<Github />} color="Black" hoverIndicator /></a>
            </CardFooter>
        </Card>

    )
}

export default Description;