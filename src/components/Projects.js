import React from 'react';
import TeacherInterface from './ProjectCards/TeacherInterface';
import Scheduler from './ProjectCards/Scheduler';
import WikiMaps from './ProjectCards/WikiMaps';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  projectContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    borderLeft: '2px solid black',
    borderRight: '2px solid black',
    width: '90%',
    margin: '2% 0 0 5%',
    padding: '1%',
  },
}))

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.projectContainer}>
      <TeacherInterface />
      <Scheduler />
      <WikiMaps />
    </div>
  )
}

export default Projects
