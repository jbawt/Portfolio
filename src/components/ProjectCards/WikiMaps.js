import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    background: 'linear-gradient(#7DDE92, #7DDE92, #7DDE92, #7DDE92, #7DDE92, #558d61)',
    border: '1px solid black',
  },
  media: {
    height: 250,
  },
});

function WikiMaps() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          image="https://raw.githubusercontent.com/davemgj84/wiki-maps/master/docs/homepage.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            WikiMaps
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This project was developed by some classmates and myself to help understand the power of jquery. Inconjuction with the google maps api, and Express.js we were able to make a site for people to create there own favorite stops and tours where ever they go.
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions>
        <Button size="small" color="primary">
          Visit
        </Button>
      </CardActions>
    </Card>
  )
}

export default WikiMaps;