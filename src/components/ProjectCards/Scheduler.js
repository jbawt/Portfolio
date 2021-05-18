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

function Scheduler() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          image="https://raw.githubusercontent.com/jbawt/scheduler/master/docs/screen-shots/form.png"
          title="Scheduler Home Page"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Scheduler
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This was a project developed during my time in school to help refine my skill set with the frame-work React.js. The goal of this project was to get comfortable using custom hooks, as well as using props within a fuctional component.
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

export default Scheduler
