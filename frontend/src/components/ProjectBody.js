import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Banner from './Banner'
import '../App.css'

import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { maxWidth } from '@mui/system';

function ProjectBody(props){
    const {projectTitle} = props
    const [content, setContent] = useState([])
    const [images, setImages] = useState([])
    

    const url = "http://127.0.0.1:5000"

   

    async function fetchContent(){
        await axios.get(url + "/content/" + projectTitle)
        .then((contentResponse) =>{
        const headers = JSON.parse(contentResponse.data);
        setContent(headers);
        })
        .catch((error) =>console.log(error))
    }
    async function fetchImages(){
        await axios.get(url + "/images/" + projectTitle)
        .then((contentResponse) =>{
          const headers = JSON.parse(contentResponse.data);
          setImages(headers);
        })
        .catch((error) =>console.log(error))
    }

    useEffect(() => {
        fetchContent();
        fetchImages();
    }, [])


    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
        if(obj){
            if (obj.bold){
                modifiedText = (<b key={index}>{text}</b>)
            }
            if (obj.italic){
                modifiedText = (<em key={index}>{text}</em>)
            }
            if (obj.underline){
                modifiedText = (<u key={index}>{text}</u>)
            }
            if (obj.link){
                modifiedText = (<a key={index} href={obj.link} target='_blank'>{text}</a>)
            }
            if (obj.bookmark){
                modifiedText = (<a key={index} href={obj.bookmark}>{text}</a>)
            }
            if (obj.link_id){
                modifiedText = (<a key={index} id={obj.link_id}>{text}</a>)
            }
        }
        switch(type){
            case 'heading-one':
                return <h2 key={index}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>
            case 'heading-two':
                return <h2 key={index}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>
            case 'heading-three':
                return <h3 key={index}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>
            case 'heading-four':
                return <h4 key={index}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>
            case 'paragraph':
                return <p key={index}>&emsp;{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
            case 'unordered-list':
                return <ul key={index}>{modifiedText.map((item, i) => <li><React.Fragment key={i}>{item}</React.Fragment></li>)}</ul>
            case 'image':
                const imgWidth = obj.children[0].width
                const imgMaxWidth = obj.children[0].maxWidth
                const binaryImage = (content.length !== 0 && images.length !== 0 ? images.filter((item)=>{
                    return item.filename===obj.children[0].src
                })[0]: '').image
                return(
                    <img
                    key={index}
                    alt={obj.children[0].title}
                    style={{width:`${imgWidth}`,maxWidth:`${imgMaxWidth}`}}
                    src={`data:image/jpg;base64,${binaryImage}`}
                    />
                )
            default:
                return modifiedText;
        }
    }

    return(
        
        <>
        <Banner 
         imageFile={content.length !== 0 && images.length !== 0 ? images.filter((item)=>{
            return item.filename===content[0].bannerImage
        })[0]: ''}/>
        <Grid container spacing={5} sx={{ mt: 0 }}>
            <Grid item xs={12} >
                <Typography variant="h4" gutterBottom>
                    {content.length !== 0 ? content[0].title : ""}
                </Typography>
                <Divider />
                {content.length !==0 ? content[0].body.map((typeObj, index) =>{
                    const children = typeObj.children.map((item,itemIndex) => getContentFragment(itemIndex,item.text, item))
                    return getContentFragment(index, children, typeObj, typeObj.type)
                }):''}
                </Grid>
            </Grid>
        </>
    )
}


export default ProjectBody