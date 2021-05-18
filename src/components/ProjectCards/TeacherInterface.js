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

function TeacherInterface() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          image="https://raw.githubusercontent.com/jbawt/Safety-In-Schools-Teacher-Interface/master/teacher_dashboard_SWIFTLearning_media/Dashboard.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Safety in Schools
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This project was focused on re-designing and renewing the teacher interface that is used by highschools across western Canada in conjuction with Safety in Schools. The Stack used was vue.js, MySql, Express.js, and node.js.
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

export default TeacherInterface
