import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import { TextField } from '@material-ui/core'
import '../App.css';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: 'blue',
  },
  contactContainer: {

    height: '100vh',


  },
  heading1_Text: {

    color: 'white',
    paddingTop: '5%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      height: '30%',
    },
    [theme.breakpoints.down('sm')]: {
      height: '20%',
      fontSize: '50%',
    },
  },
  logoContainer: {

    [theme.breakpoints.down('sm')]: {
      padding: '5%',

    },

  }

}));
function Language() {

  const theme = useTheme()
  const classes = useStyles()
  return (

    <Grid container className={classes.contactContainer} className="bg__image" justify="center">
      <Grid item xs={12} md={12} className={classes.heading1_Text}>
        <h1 className="textform_1" >Use modern <b className="textform_2">Web technologies. </b>  </h1>
        <h1 className="textform_3">Never settle for 'word press'.</h1>
      </Grid>
      <Grid item xs={12}>
        <Grid container xs={12} >
          <Grid container xs={12} md={4} justify='center' className={classes.logoContainer}>
            <img src={require(`../images/angular_image.png`)} width="25%"  ></img>
          </Grid>
          <Grid container xs={12} md={4} justify='center' className={classes.logoContainer}>
            <img className="re_pic" src={require(`../images/react_image.png`)} width="15%"  ></img>
          </Grid>
          <Grid container xs={12} md={4} justify='center' className={classes.logoContainer}>
            <img src={require(`../images/vue_image.png`)} width="25%" ></img>
          </Grid >
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Language