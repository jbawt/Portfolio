import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    width: '100%',
    margin: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2em',
    color: 'black',
    // background: '#7DDE92'
  }
}))

function Header() {

  const classes = useStyles();

  return (
    <div className={classes.title}>
      <h1>Full-Stack Web Developer</h1>
    </div>
  )
}

export default Header
