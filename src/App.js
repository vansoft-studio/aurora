/* Importing Grid,react,style and Timer component  */

import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Timer from './components/timer-component'

import SocialNetwork from './components/socialnetwork'


import Slideshow from './components/image-slider'

import Loginpage from './components/loginmain'
import Contact from './components/contact-page'


/* Grid setting in responsive */
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
  Table: {
    height: '80%',
    [theme.breakpoints.down('md')]: {
      height: '70%',
      width: '30%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '60%',
      width: '30%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '60%',
      width: '20%'
    }
  },
  text: {
    height: '80%',
    width: '100%',
    fontSize: '300%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      height: '30%',
      width: '50%',
      fontSize: '200%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '40%',
      width: '60%',
      fontSize: '200%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '40%',
      width: '40%',
      fontSize: '200%'
    }
  }
}))
function App() {
  const classes = useStyles()
  return (

    <Grid>


    <Grid>
      <Grid>
        <Slideshow />
      </Grid>

      <Grid className='App-header'>
        <Grid container className={classes.Container}>
          <Grid item xs={12} md={12} className={classes.simpleText} />
          <Grid item xs={12} md={7} className={classes.Table}>
            {/* timer calling */}
            <Timer style={{ width: '100%' }} />


          </Grid>
          {/* text field */}
          <Grid item xs={12} md={5} sm={8} className={classes.text} >
            <b>Impress the curious <br />Customers with data !</b>
          </Grid>


          </Grid>
          {/* text field */}
          <Grid item xs={12} md={5} sm={8} className={classes.text} >
            <b>Impress the curious <br />Customers with data !</b>
          </Grid>
<Grid>
    <Grid className='App-header'>
      <Grid container className={classes.Container}>
        <Grid item xs={12} md={12} className={classes.simpleText} />
        <Grid item xs={12} md={7} className={classes.Table}>
          {/* timer calling */}
          <Timer style={{ width: '100%' }} />

        </Grid>
        {/* text field */}
        <Grid item xs={12} md={5} sm={8} className={classes.text} >
          <b>Impress the curious <br />Customers with data !</b>


        </Grid>
      </Grid>

      <Grid><SocialNetwork /></Grid>

    </Grid>
      <div className='App-head' >
        <Contact />
      </div>
    </Grid>
</Grid>
</Grid>
</Grid>
  )
}
export default App
