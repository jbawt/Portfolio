import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 200,
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
            This was a project developed during my time in school to help refine my skill set with the frame-work React.js.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Visit
        </Button>
      </CardActions>
    </Card>
  )
}

export default Scheduler
