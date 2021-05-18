import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textDiv: {
    width: '50%',
    padding: '1%',
    margin: '2%',
    border: '2.5px solid lightgray',
    background: 'white',
    color: 'black',
    borderRadius: '10px',
  },
}))

function Intro() {

  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <div className={classes.textDiv}>
        <Typography paragraph>
          Hello My name is Josh Bawtinheimer. I am a full-stack web developer fluent in React.js, vue.js, PostgreSQL, Express.js, node.js, and many other librarys and frameworks. I have always been on the more creative side of life and I love to do freelance work. I am in the early stages of my career but I know that my learning capabilities will help me excell in the field of web development and other areas of the IT industry as my career progresses. I would love to have a chance to chat with you and see what kind of ideas and creations are inside your head, and help you achieve these goals from a technical point of view. A large portion of my time is dedicated to not only furthering my career, but also making my self versatile in an industry that I not love but am always excited about being apart of. If you would like to get in contact with me and talk about some ideas please don't hesitate to contact me <a href="www.google.com" target="_blank">here</a>.
        </Typography>
      </div>
    </div>
  )
}

export default Intro
