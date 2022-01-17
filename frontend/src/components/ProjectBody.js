import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Banner from './Banner'
import ContentMapping from '../Content/ContentMapping'

function ProjectBody(props){
    const {content} = props
    return(
        <>
        <Banner image={content !== undefined ? content.bannerImage : ""} />
        <Grid container spacing={5} sx={{ mt: 0 }}>
            <Grid item xs={12} >
                <Typography variant="h4" gutterBottom>
                    {content !== undefined ? content.title : ""}
                </Typography>
                <Divider />
                <ContentMapping post={content !== undefined ? content.fileName : ""} />
            </Grid>
        </Grid>
        </>
    )
}


export default ProjectBody