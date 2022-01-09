import Post from '../components/Post';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


function Projects(props) {
    const {mobileView, headers} = props
    return(
        <Container maxwidth="lg">
            <Header title="Wilbert Sible" headers={headers} mobileView={mobileView} />
            <Grid container spacing={6} sx={{ mt: 0 }}>
                <Grid item xs='12'>
                <Typography variant="h3" align='center' gutterBottom>
                            {"Projects"}
                </Typography>
                <Divider />
                </Grid>
                <Grid item xs='6'>
                    <Post />
                </Grid>
                <Grid item xs='6'>
                    <Post />
                </Grid>
                <Grid item xs='6'>
                    <Post />
                </Grid>
                <Grid item xs='6'>
                    <Post />
                </Grid>
            </Grid>
            <Footer />
        </Container>
    )
}


export default Projects;