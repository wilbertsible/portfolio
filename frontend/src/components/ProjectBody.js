import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Banner from './Banner'
import ContentMapping from '../Content/ContentMapping'
// import PC from '../Content/PC/PC'

import '../App.css'

import axios from 'axios';
import React, {useEffect, useState} from 'react'

function ProjectBody(props){
    const {projectTitle} = props
    const [contentList, setContentList] = useState([])
    
    const url = "http://127.0.0.1:5000/content/"+projectTitle

    useEffect(() => {
        const fetchContentList = async() =>{
            await axios.get(url)
            .then((contentResponse) =>{
            const headers = JSON.parse(contentResponse.data);
            setContentList(headers);
            })
            .catch((error) =>console.log(error))
        }
        fetchContentList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <>
        <Banner imageFile={contentList.length !== 0 ? contentList[0].bannerImage: ""}/>
        <Grid container spacing={5} sx={{ mt: 0 }}>
            <Grid item xs={12} >
                <Typography variant="h4" gutterBottom>
                    {contentList.length !== 0 ? contentList[0].title : ""}
                </Typography>
                <Divider />
                <ContentMapping 
                contentFileName={contentList.length !== 0 ? contentList[0].fileName : "Default"}/>
                </Grid>
            </Grid>
        </>
    )
}


export default ProjectBody