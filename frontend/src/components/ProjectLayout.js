import * as React from 'react'; 
import {useParams} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import ProjectBody from './ProjectBody'
import Container from '@mui/material/Container'; 



function ProjectLayout(props){
    const {headers, mobileView, content} = props
    const {title} = useParams();

    return (
        <Container maxwidth="lg">
            <Header title="Wilbert Sible" headers={headers} mobileView={mobileView} />
            <ProjectBody content={content.filter((article)=>{
              return(article.fileName===title)
            })[0]}/>
            <Footer />
        </Container>
    )
    
}

export default ProjectLayout;