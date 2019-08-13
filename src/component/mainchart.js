/* combaine all the component in mainchart component page */
/* import all the components and packeges */
import React, { Component } from 'react'
import { useTheme } from '@material-ui/styles'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Chart from '../component/chart'
import AreaChart from '../component/area-chart'
import Doughnut1 from '../component/doughnut'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
/* set use style for making responsive in all the break points */
const useStyles = makeStyles((theme) => createStyles({
  root: {
  },
  areachart: {
    height: '100%',

    [theme.breakpoints.down('md')]: {
      height: '50%',
      fontSize: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '50%',
      fontSize: '80%'

    },
    [theme.breakpoints.down('xs')]: {
      height: '80%'

    }
  },
  doughnut: {
    height: '50%',

    [theme.breakpoints.down('md')]: {
      height: '50%'

    }

  },
  pie1: {
    height: '50%',

    [theme.breakpoints.down('md')]: {
      height: '50%'

    },
    [theme.breakpoints.down('xs')]: {
      height: '50%'

    },
    containerclass: {
      height: '50%',
      [theme.breakpoints.down('xs')]: {
        height: '100%'

      }
    }
  }
}))
/* function to combaine chart components */
function MainChart () {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container xs={12} style={{ height: '100vh' }}>
        <Grid item xs={12} md={8} style={{ }} className={classes.areachart}>
          <AreaChart />
        </Grid>

        <Grid xs={12} md={4} container className={classes.containerclass}>
          <Hidden xsDown>
            <Grid item xs={6} md={12} style={{ }} className={classes.doughnut}>
              <Doughnut1 />

            </Grid>

            <Grid item xs={6} md={12} style={{ }}className={classes.pie1}>
              <Chart />
            </Grid>
          </Hidden>
        </Grid>

      </Grid>
    </React.Fragment>
  )
}

export default MainChart
