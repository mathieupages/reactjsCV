import React from 'react';
import { FormField, TextInput} from 'grommet';
import { useState } from 'react';
import { Card, CardHeader, CardBody, Box, CardFooter, Anchor, Heading, Button, Form } from 'grommet';
import { Facebook, Instagram, Linkedin, Github } from 'grommet-icons'


const Formulaire = (props) => {

    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [mail, setMail] = useState()
    const [message, setMessage] = useState()
    
    const handleChangeFirstName = e => {
        setFirstname(e.target.value)
    }

    const handleChangeLastname = e => {
        setLastname(e.target.value)
    }
    const handleChangeMail = e => {
        setMail(e.target.value)
    }
    const handleChangeMessage = e => {
        setMessage(e.target.value)
    }

    function handleSubmit(event) {
        alert('Bonjour : ' + firstname + ' ' + lastname + '\n' + "message  :" + message + " envoyé à " + mail);
        event.preventDefault();
    }


    return (
        <Box justify="center" align="center" pad="large">
        <Card height="large"  width="large" background={{ color: "light-1", opacity: "0.7" }}>
            <CardHeader align='center' justify='center' pad="xsmall"><Heading level="2">Formulaire</Heading>
            </CardHeader>
            <CardBody align='center' pad="xsmall">
            <Form onSubmit={handleSubmit}>
                <FormField label="Nom">
                    <TextInput value={lastname} onChange={handleChangeLastname} placeholder="type here" />
                </FormField>
                <FormField label="Prénom">
                    <TextInput value={firstname} onChange={handleChangeFirstName} placeholder="type here" />
                </FormField>
                <FormField label="e-mail">
                    <TextInput value={mail} onChange={handleChangeMail} placeholder="type here" />
                </FormField>
                <FormField label="Message">
                    <TextInput value={message} onChange={handleChangeMessage} placeholder="type here"/>
                </FormField>
                <Button margin="large" justify="center" type="submit" primary label="Envoyer" />
            </Form>
            </CardBody>
            <CardFooter background="light-0" justify="center">
                <Anchor icon={<Facebook />} color="Black" hoverIndicator href="https://www.facebook.com/mathieu.pages.92" />
                <Anchor icon={<Instagram />} color="Black" hoverIndicator href="https://www.instagram.com/pagesmathieu/?hl=fr" />
                <Anchor icon={<Linkedin />} color="Black" hoverIndicator href="https://www.linkedin.com/in/pagesmathieu/" />
                <Anchor icon={<Github />} color="Black" hoverIndicator href="https://github.com/mathieupages/reactjsCV" />
            </CardFooter>
        </Card>
        </Box>
    )
}

export default Formulaire;
