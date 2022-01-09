import * as React from 'react'; 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Post from '../components/Post';
import AboutCard from '../components/AboutCard';
import Social from '../components/Social';

function Body(props){
    const {sidebar, socials, mobileView} = props;
    const displayDesktop = () => {
        return(
            <Grid container spacing={5} sx={{ mt: 0 }}>
                <Grid item xs={8} >
                    <Typography variant="h6" gutterBottom>
                        {"Projects"}
                    </Typography>
                    <Divider />
                    <Grid container spacing={0} >
                        <Grid item xs={12} md={12} sx={{mt: 2}}>
                            <Post />
                        </Grid>
                        <Grid item xs={12} md={12} sx={{mt: 2}}>
                            <Post />
                        </Grid>
                        <Grid item xs={12} md={12} sx={{mt: 2}}>
                            <Post />
                        </Grid>
                    </Grid>
                </Grid>
                    <Grid item xs={4}>
                    <AboutCard
                    title={sidebar.title}
                    description={sidebar.description}
                    />
                    <Social
                    socials={socials}
                    />
                </Grid>
            </Grid>
        )
    }

    const displayMobile = () => {
        return(
            <Grid container spacing={5} sx={{ mt: 0 }}>
                <Grid item xs={12} >
                <AboutCard
                title={sidebar.title}
                description={sidebar.description}
                />
                <Typography variant="h6" gutterBottom>
                    {"Projects"}
                </Typography>
                <Divider />
                <Post />
                <Post />
                <Post />
                </Grid>
                <Grid item xs={4}>
                <Social
                socials={socials}
                />
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            {mobileView ? displayMobile():displayDesktop()}
        </>
    )
    
}

export default Body;