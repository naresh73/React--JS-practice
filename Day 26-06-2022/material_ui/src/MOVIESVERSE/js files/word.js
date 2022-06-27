import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 50 }} color="grey" gutterBottom>
        Word of the Day
      </Typography>
      

      <Typography variant="body2">
        people who are really serious about software should
        <br />
        {'"make their own hardware."'}
      </Typography>
      <Typography variant="h5" component="div">
        -Alan Key{bull}
      </Typography>
    </CardContent>
    <CardActions>
    
      <Button size="small">
        <center>Learn More</center>
      </Button>
    
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
