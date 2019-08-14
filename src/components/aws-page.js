import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => createStyles({
  
  Container: {
    height: '100vh',
  },
  simpleText: {
    height: '20%',
    [theme.breakpoints.down('md')]: {
      height: '5%',
    },
    [theme.breakpoints.down('sm')]: {
      height: '5%',
    },
    [theme.breakpoints.down('xs')]: {
      height: '0%',
    }
  },
  Images: {
    position: 'relative',
    left: '-8%',
    top: '-9%',

   
    height: '80%',

    [theme.breakpoints.down('md')]: {
      height: '60%',

    },
    [theme.breakpoints.down('sm')]: {
      height: '50%',

    },
    [theme.breakpoints.down('xs')]: {
      height: '50%',

    }
  },
  Text: {
    height: '80%',
    fontSize: '300%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',

    [theme.breakpoints.down('md')]: {
      height: '40%',
      width: '50%',
      fontSize: '200%',
    },
    [theme.breakpoints.down('sm')]: {
      height: '40%',
      width: '60%',
      fontSize: '200%',
    },
    [theme.breakpoints.down('xs')]: {
      height: '40%',
      width: '40%',
      fontSize: '140%',
    }

  },
}));
function Pageaws() {
  const classes = useStyles()
  return (
    <Grid className="forground1">
      <Grid container className={classes.Container} classname="App-header" >
        <Grid item xs={12} md={12} className={classes.simpleText}>
        </Grid>
        <Grid item xs={12} md={6} className={classes.Images}>
          <img className="azura__image" src={require(`../images/azura_image.png`)} width="450%" height="160%"></img>
        </Grid>
        <Grid item xs={12} md={6} className={classes.Text} >
          <img className="cloud__image" src={require(`../images/cloud_image.png`)} width="190%" height="170%"></img>
          <img className="loon__image" src={require(`../images/loon_image.png`)} width="10%" height="15%"></img>
          <img className="loon2__image" src={require(`../images/loon2_image.png`)} width="120%" height="35%"></img>
          <p className="text1__doc"><b>Be in the cloud</b></p>  <br />
          <p className="text2__doc"> we can help you level up<br />
            with cutting edge cloud<br />
            solutions<br /></p>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Pageaws