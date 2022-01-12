import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


function Article(){
    return(
        <Grid container spacing={5} sx={{ mt: 0 }}>
            <Grid item xs={12} >
                <Typography variant="h4" gutterBottom>
                    {"Projects"}
                </Typography>
                <Divider />
                <div>

                </div>
            </Grid>
        </Grid>
    )
}


export default Article