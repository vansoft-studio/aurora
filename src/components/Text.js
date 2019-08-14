import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { useTheme, mergeClasses } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => createStyles({
  root: {
    height: '100vh'
  },
  textstyle: {
    fontSize: '200%',
    height: '50%',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      fontSize: '180%',
      height: '50%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '0%',
      fontSize: '200%',
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      height: '0%',
      fontSize: '130%',
      textAlign: 'center'
    }

  }

}))

function Text () {
  const classes = useStyles()
  return (

    <Grid item className={classes.textstyle}>
      <Typography className={classes.textstyle} >
        <Box fontWeight='fontWeightLight'm={1}>
            And also
        </Box>
        <Box fontWeight='fontWeightBold' lineHeight={1} m={1}>
            protect your data
        </Box>
        <Box fontWeight='fontWeightLight'm={1}>
            by carefully
        </Box>
        <Box fontWeight='fontWeightLight' lineHeight={1} m={1}>
            managing it.
        </Box>
      </Typography>
    </Grid>

  )
}

export default Text
