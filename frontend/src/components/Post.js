import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';

function Post(props) {
  //const { post } = props;

  return (
    <Grid item xs={12} md={12} sx={{mt: 4}}>
      <CardActionArea component="a" href="#">
        <Card elevation={5} sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {'Hello'}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {'World'}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {'Hello'}
            </Typography>
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          /> */}
        </Card>
      </CardActionArea>
    </Grid>
  );
}


export default Post;