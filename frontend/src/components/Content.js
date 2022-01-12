import * as React from 'react'; 

import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Article from '../components/Article'
import Container from '@mui/material/Container';
import PC_Final from '../Content/PC/PCImage/PC_Final.jpg'


const mainFeaturedPost = {
    title: 'Building My First PC',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: PC_Final,
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };

function Content(props){
    const {headers, mobileView} = props

    return (
        <Container maxwidth="lg">
            <Header title="Wilbert Sible" headers={headers} mobileView={mobileView} />
            <Banner post={mainFeaturedPost} />
            <Article />
            <Footer />
        </Container>
    )
    
}

export default Content;