import React, { Component } from 'react'
import { Grid, Button, TextField } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Login from '../components/login'
import Text from '../components/Text'

const useStyles = makeStyles((theme) => createStyles({
  root: {
    backgroundColor: 'blue'
  },
  contactContainer: {

    height: '100vh'

  },
  textGap: {

    height: '10%',
    [theme.breakpoints.down('md')]: {
      height: '0%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '0%'
    }
  },
  LoginTextBox: {

    height: '90%',

    [theme.breakpoints.down('md')]: {
      height: '27%',
      fontSize: '125%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '25%',
      fontSize: '100%'

    },
    [theme.breakpoints.down('xs')]: {
      height: '20%',
      fontSize: '70%'
    }
  },

  contactTextMessage: {

    height: '90%',

    [theme.breakpoints.down('md')]: {

      height: '73%'

    },
    [theme.breakpoints.down('sm')]: {
      height: '75%'

    },
    [theme.breakpoints.down('xs')]: {
      height: '80%'
    }
  }

}))

function Contact () {
  const classes = useStyles()
  return (
    <React.Fragment>

      <Grid container className={classes.contactContainer} >
        <Grid item xs={12} md={12} className={classes.textGap} />

        <Grid item xs={12} md={6} className={classes.LoginTextBox} >
          <Text />
        </Grid>
        <Grid item xs={12} md={6} className={classes.contactTextMessage} >

          <Login />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Contact
