import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => createStyles({
  root: {
  },
  Container: {
    height: '100vh'
  },
  simpleText: {

    height: '20%',
    [theme.breakpoints.down('md')]: {
      height: '5%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '5%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '0%'
    }
  },
  Images: {

    position: 'relative',
    left: '15%',
    top: '9%',
    height: '68%',
    [theme.breakpoints.down('md')]: {
      height: '60%',
      width: '50%',
      position: 'relative'
    },
    [theme.breakpoints.down('sm')]: {
      height: '40%'

    },
    [theme.breakpoints.down('xs')]: {
      height: '40%'

    }
  },
  Text: {

    height: '75%',
    fontSize: '300%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      height: '40%',
      width: '50%',
      fontSize: '200%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '60%',
      width: '60%',
      fontSize: '200%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '60%',
      width: '40%',
      fontSize: '200%'
    }
  }
}))
function SocialNetwork () {
  const classes = useStyles()
  return (
    <Grid className='for__groundimg'>
      <Grid container className={classes.Container} classname='App-header' >
        <Grid item xs={12} md={12} className={classes.simpleText} />
        <Grid item xs={12} md={6} className={classes.Images}>
          <img src={require(`../images/cake_image.png`)} width='32%' height='65%' />
          <div className='social_pic'> <img src={require(`../images/socialnetwork_image.png`)} width='12%' height='13%' /> </div>
          <div className='contact'> <img src={require(`../images/contact_image.png`)} width='35%' height='29%' /> </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.Text} >
          <p className='text_no1'>Stay Connected<br /> With Your <br />Customers.<br />Integrate With <br />Social Media</p><br />

        </Grid>
      </Grid>
    </Grid>
  )
}
export default SocialNetwork
