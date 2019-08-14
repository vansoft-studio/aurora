/* this is a code for login page
Import combination
import text field from material ui to get text box
import link from material ui for buttons
import formcontrllabel to display an extra label in checkbox
import material ui checkbox to turn an option 
import material ui grid to make responsive
import css to get all properties defined
import material ui typing component typography
import material ui box all style functions can be used

*/
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import '../App.css';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useTheme } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: '100vh',

  },
  textfield: {
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      height: '120%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '70%',
      height: '100%',
    },


  },

  login: {
    height: '90%',
    width: '60%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      height: '70%',
      paddingLeft: '10%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '100%',
      paddingLeft: '25%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: '100%',
      paddingLeft: '25%',
    },

  },
  buttons: {
    width: '98%',
    height: '0%',
    padding: '15px 10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontFamily: 'Courier New, Courier, monospace',
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'Roboto,sans-serif',
    marginLeft: '1%',
    [theme.breakpoints.down('sm')]: {

    },

  },
  links: {
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  label: {
    color: 'blue',
  },
  buttonall: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },

}));
const config = {
  text: "Login with Facebook",
  icon: "facebook",
  iconFormat: name => `fa fa-${name}`,
  style: { background: "#3b5998" },
  activeStyle: { background: "#293e69" }
};

function Login() {
  const theme = useTheme()
  const classes = useStyles()


  return (

    <React.Fragment>
      <CssBaseline />
      <Grid item xs={12} className={classes.login} textAlign="center" >
        <Grid className={classes.textfield} >
          <Grid align="center"><br />
            <img align="center" src={require(`../images/man.png`)} width="20%"></img>
          </Grid>
          <Grid >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <FormControlLabel className={classes.label}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Grid>
          <Grid>
            <Grid item xs>
              <input type="button" className={classes.buttons} value="Continue"></input>
            </Grid>
            <Grid item >
              <FacebookLoginButton onClick={() => alert("successfully logined")} />
              <div>
                <GoogleLoginButton />
              </div>
            </Grid>
          </Grid>
          <div className={classes.links}>

            <Grid container  >

              <Grid item>
                <Link href="#" variant="body2">
                  {" Forgot password? Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </div>

        </Grid>
      </Grid>
    </React.Fragment>

  );
}


/* Exporting the component*/
export default Login