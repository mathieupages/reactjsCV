import React from 'react';
import { FormField, Box, TextInput} from 'grommet'; 



const Formulaire = () => {
    return (
        <Box>
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
                <TextInput placeholder="type here" />
            </FormField>
        </Box>
    )
}

export default Formulaire;
