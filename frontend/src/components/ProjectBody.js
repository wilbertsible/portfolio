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
    const [imageList, setImageList] = useState([])
    
    const url = "http://127.0.0.1:5000"

    async function fetchContentList(){
        await axios.get(url + "/content/" + projectTitle)
        .then((contentResponse) =>{
        const headers = JSON.parse(contentResponse.data);
        setContentList(headers);
        })
        .catch((error) =>console.log(error))
    }
    async function fetchImageList(){
        await axios.get(url + "/images/" + projectTitle)
        .then((contentResponse) =>{
          const headers = JSON.parse(contentResponse.data);
          setImageList(headers);
        })
        .catch((error) =>console.log(error))
    }

    useEffect(() => {
        fetchContentList();
        fetchImageList();
    },[])


    function getImage(file){
        const imageBinary = imageList.filter((image) =>{
            return(image.filename === file)
        })
        return imageList.length !== 0 ? imageBinary[0].image : ""
    }
    console.log(contentList)
    return(
        <>
        <Banner 
         imageFile={contentList.length !== 0 && imageList.length !== 0 ? imageList.filter((item)=>{
            return item.filename===contentList[0].bannerImage
        })[0]: ""}/>
        <Grid container spacing={5} sx={{ mt: 0 }}>
            <Grid item xs={12} >
                <Typography variant="h4" gutterBottom>
                    {contentList.length !== 0 ? contentList[0].title : ""}
                </Typography>
                <Divider />
                {/* <PC getImage={getImage}/> */}
                <ContentMapping 
                contentList={contentList.length !== 0 ? contentList[0].fileName : ""} 
                getImage={getImage}
                projectTitle={projectTitle}/>
                </Grid>
            </Grid>
        </>
    )
}


export default ProjectBody