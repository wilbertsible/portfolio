import React from 'react'

import Container from '@mui/material/Container';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import HeroImage from '../images/hero.jpg';
import Body from '../components/Body'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';



const sections = [
    { title: 'Home', url: '#' },
    { title: 'About', url: '#' },
    { title: 'Projects', url: '#' },
    { title: 'Contact', url: '#' },
]

const sidebar = {
    title: 'About',
    description:
        'Etiam porta malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};


function Home(props){
    const {mobileView} = props;
    return(
        <Container maxwidth="lg">
        <Header title="Wilbert Sible" sections={sections} mobileView={mobileView}>
        </Header>
        <Hero hero={HeroImage} />
        <Body sidebar={sidebar} mobileView={mobileView}/>
        <Footer />
      </Container>
    )
}

export default Home;