import React from 'react';
import { Card, CardHeader, CardBody, Text, CardFooter, Anchor, Heading } from 'grommet';
import { Facebook, Instagram, Linkedin, Github } from 'grommet-icons'

const Exppro = () => {
    return (
        <Card height="large" width="large" background={{ color:"light-1", opacity: "0.7" }}>
            <CardHeader align='center' justify='center' pad="xsmall"><Heading level="2">Expérience professionnelle</Heading>
            </CardHeader>
            <CardBody align='center' pad="xsmall">
                <ul>
                    <Text margin="xsmall">
                        <li> Actuellement : En alternance SMSFactor – Nice Developpeur full stack</li>
                        </Text>
                    <Text margin="xsmall">
                        <li>2015-2018 Technicien assistant utilisateur- Econocom – Valbonne Sous-Traitance à Thalès Underwater System
                            <ul>
                                <li>Gestion des incidents par l’outils de ticketing (KISS)</li>
                                <li>Gestion des demandes, installations de postes et téléphonie</li>
                                <li>Assistant des utilisateurs à l’utilisation des postes de travail</li>
                            </ul>
                        </li>
                    </Text>
                    <Text margin="xsmall">
                        <li>Assistant des utilisateurs à l’utilisation des postes de travail 2013- 2014 Support informatique – Hôtel l’Apogée Courchevel
                            <ul>
                                <li>Installations et préparation des nouveaux équipements</li>
                                <li>Câble réseau</li>
                                <li>Mise en place du support informatique</li>
                            </ul>
                        </li>
                    </Text>
                    <Text margin="xsmall">
                    <li>2013 Assistant informatique – Hôtel Eden Roc et Château St Martin En alternance
                        <ul>
                            <li>Support des utilisateurs et clients des hôtels</li>
                            <li>Projet réalisé : mise en place d’une gestion de parc informatique (glpi + ocs inventory)</li>
                        </ul>
                    </li>
                    </Text>
                    <Text margin="xsmall">
                    <li> Depuis 2009 divers job d’été
                        <ul>
                            <li>Serveur, Belambra Grasse</li>
                            <li>Magasinier fruit et légumes, Auchan Grasse</li>
                            <li>Vente et dépannage informatique, Mission PC Grasse</li>
                            <li>Conditionneur, Floressence St Cézaire</li>
                        </ul>
                    </li>
                    </Text>
                </ul>
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

export default Exppro;