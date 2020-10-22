import React from 'react';
import { Card, CardHeader, CardBody, Text, CardFooter, Anchor, Heading } from 'grommet';
import { Facebook, Instagram, Linkedin, Github } from 'grommet-icons'

const Exppro = () => {
    return (
        <Card height="large" width="large" background="light-1">
            <CardHeader align='center' justify='center' pad="large"><Heading level="2">Exppro</Heading>
            </CardHeader>
            <CardBody align='center' pad="large">
                Actuellement : En alternance SMSFactor – Nice
                Developpeur full stack
                2015-2018 Technicien assistant utilisateur- Econocom – Valbonne
                Sous-Traitance à Thalès Underwater System
                -Gestion des incidents par l’outils de ticketing (KISS)
                -Gestion des demandes, installations de postes et téléphonie
                -Assistant des utilisateurs à l’utilisation des postes de travail
                2013- 2014 Support informatique – Hôtel l’Apogée Courchevel
                -Installations et préparation des nouveaux équipements
                -Câble réseau
                -Mise en place du support informatique
                2013 Assistant informatique – Hôtel Eden Roc et Château St Martin
                En alternance
                -Support des utilisateurs et clients des hôtels
                -Projet réalisé : mise en place d’une gestion de parc informatique (glpi + ocs inventory)
                Depuis 2009 divers job d’été
                -Serveur, Belambra Grasse
                -Magasinier fruit et légumes, Auchan Grasse
                -Vente et dépannage informatique, Mission PC Grasse
                -Conditionneur, Floressence St Cézaire
            </CardBody>
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