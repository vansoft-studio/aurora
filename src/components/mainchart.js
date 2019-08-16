/* combaine all the component in mainchart component page */
/* import all the components and packeges */
import React, { Component } from 'react'
import { useTheme } from '@material-ui/styles'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Chart from '../components/piechart'
import AreaChart from '../components/areachart'
import Doughnut1 from '../components/doughtnutchart'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
/* set use style for making responsive in all the break points */
const useStyles = makeStyles((theme) => createStyles({
  root: {
  },
  logo: {
    borderColor: 'red',
    borderStyle: 'solid',
    height: '10%',
    [theme.breakpoints.down('md')]: {
      height: '5%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5%'
    }

  },
  areachart: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: '25%',
      fontSize: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '50%',
      fontSize: '80%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '60%'
    }
  },
  doughnut: {
    height: '50%'
  },
  pie1: {
    height: '50%'
  },
  containerclass: {
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      height: '35%'
    },
    [theme.breakpoints.down('md')]: {
      height: '70%'
    }
  }

}))
/* function to combaine chart components */
function MainChart () {
  const classes = useStyles()
  return (
    <Grid container xs={12} style={{ height: '100vh', bordeColor: 'green', borderStyle: 'solid' }}>
      <Grid item xs={12} md={12} className={classes.logo} />

      <Grid item xs={12} md={8} className={classes.areachart}>
        <AreaChart />
      </Grid>
      <Grid xs={12} md={4} container className={classes.containerclass}>

        <Grid item xs={12} md={12} className={classes.doughnut}>
          <Doughnut1 />
        </Grid>
        <Hidden mdDown>

          <Grid item xs={12} md={12} className={classes.pie1}>
            <Chart />
          </Grid>
        </Hidden>
      </Grid>
    </Grid>

  )
}

export default MainChart
