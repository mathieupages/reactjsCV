import React from 'react';
import { Card, CardHeader, CardBody, Text, CardFooter, Anchor } from 'grommet';
import { Facebook, Instagram, Linkedin, Github } from 'grommet-icons'

const Exppro = () => {
    return (
        <Card height="large" width="large" background="light-0">
            <CardHeader align='center' justify='center' pad="large"><Text color='white' size='20px' >Exppro</Text></CardHeader>
            <CardBody align='center' pad="large"><Text color='white' size='18px'>Je suis étudiant à Ynov, Je n'ai jamais fait de ReactJS et j'essaie de créer mon curriculum vitae en :</Text></CardBody>
            <CardFooter background="light-0" justify="center">
                <a href="https://www.facebook.com/mathieu.pages.92"><Anchor icon={<Facebook />} color="white" hoverIndicator /></a>
                <a href="https://www.instagram.com/pagesmathieu/?hl=fr"><Anchor icon={<Instagram />} color="white" hoverIndicator /></a>
                <a href="https://www.linkedin.com/in/pagesmathieu/"><Anchor icon={<Linkedin />} color="white" hoverIndicator /></a>
                <a href="https://github.com/mathieupages/reactjsCV"><Anchor icon={<Github />} color="white" hoverIndicator /></a>
            </CardFooter>
        </Card>

    )
}

export default Exppro;