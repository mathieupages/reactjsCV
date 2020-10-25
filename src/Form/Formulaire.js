import React from 'react';
import { FormField, TextInput} from 'grommet';
import { Card, CardHeader, CardBody, Box, CardFooter, Anchor, Heading, Button } from 'grommet';
import { Facebook, Instagram, Linkedin, Github } from 'grommet-icons'



const Formulaire = () => {
    this.state = { value: '' };
    function handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
    }


    return (
        <Box justify="center" align="center" pad="large">
        <Card height="large"  width="large" background={{ color: "light-1", opacity: "0.7" }}>
            <CardHeader align='center' justify='center' pad="xsmall"><Heading level="2">Formulaire</Heading>
            </CardHeader>
            <CardBody align='center' pad="xsmall">
                    <form onSubmit={handleSubmit}>
                <FormField label="Nom">
                    <TextInput placeholder="type here" />
                </FormField>
                <FormField label="Prénom">
                    <TextInput placeholder="type here" />
                </FormField>
                <FormField label="e-mail">
                    <TextInput placeholder="type here" />
                </FormField>
                <FormField label="Message">
                            <TextInput value={this.state.value} placeholder="type here" />
                </FormField>
                <Button margin="large" primary label="Envoyer" />
            </form>
            </CardBody>
            <CardFooter background="light-0" justify="center">
                <a href="https://www.facebook.com/mathieu.pages.92"><Anchor icon={<Facebook />} color="Black" hoverIndicator /></a>
                <a href="https://www.instagram.com/pagesmathieu/?hl=fr"><Anchor icon={<Instagram />} color="Black" hoverIndicator /></a>
                <a href="https://www.linkedin.com/in/pagesmathieu/"><Anchor icon={<Linkedin />} color="Black" hoverIndicator /></a>
                <a href="https://github.com/mathieupages/reactjsCV"><Anchor icon={<Github />} color="Black" hoverIndicator /></a>
            </CardFooter>
        </Card>
        </Box>
    )
}

export default Formulaire;
