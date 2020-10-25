import React from 'react';
import { Card, CardHeader, CardBody, Text, CardFooter, Anchor, Heading } from 'grommet';
import { Facebook, Instagram, Linkedin, Github } from 'grommet-icons'

const Formation = () => {
    return (
        <Card height="large" width="large" background={{ color: "light-1", opacity: "0.7" }}>
            <CardHeader align='center' justify='center' pad="large"><Heading level="2">Formation</Heading></CardHeader>
            <CardBody align='center' pad="large">
                <Text color='Black' size='18px' margin='medium'>2019 – Bachelors 3 – Ynov Campus (Toulouse)Systèmes et réseaux Développement web Ingénierie sécurité-Développeur</Text>
                <Text color='Black' size='18px' margin='medium'>2013 – Licence Professionnelle – Université Nice (Sophia-Antipolis) Systèmes Informatiques et Logiciels option Administration Système</Text>
                <Text color='Black' size='18px' margin='medium'>2012 – BTS IRIS – Lycée Eucalyptus(Nice) Informatique et Réseaux pour l’Industrie et les Services Techniques</Text>
                <Text color='Black' size='18px' margin='medium' alignSelf='start'>2010 – Bac STI Génie électronique – Lycée A. Tocqueville (Grasse)</Text>
            </CardBody>
            <CardFooter background="light-0" justify="center">
                <Anchor icon={<Facebook />} color="Black" hoverIndicator href="https://www.facebook.com/mathieu.pages.92" />
                <Anchor icon={<Instagram />} color="Black" hoverIndicator href="https://www.instagram.com/pagesmathieu/?hl=fr" />
                <Anchor icon={<Linkedin />} color="Black" hoverIndicator href="https://www.linkedin.com/in/pagesmathieu/" />
                <Anchor icon={<Github />} color="Black" hoverIndicator href="https://github.com/mathieupages/reactjsCV" />
            </CardFooter>
        </Card>

    )
}

export default Formation;