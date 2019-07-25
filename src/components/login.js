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
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Login extends Component {
  render() {

    return (

      <Grid item xs={12}>

        <Grid item xs={12} className="textstyle">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <Typography component="div">
            <Box fontWeight="fontWeightLight" textAlign="right" fontSize="h2.fontSize" m={1}>
              And also
      </Box>
            <Box fontWeight="fontWeightBold" lineHeight={0.5} fontSize="h2.fontSize" m={1}>
              protect your data
      </Box>
            <Box fontWeight="fontWeightLight" textAlign="right" fontSize="h2.fontSize" m={1}>
              by carefully
      </Box>
            <Box fontWeight="fontWeightLight" lineHeight={0.5} textAlign="right" fontSize="h2.fontSize" m={1}>
              managing it.
      </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} class="login_box">
          <div className="main">
            <div align="center"><br />
              <img align="center" src={require(`../../public/assests/images_login/man.png`)} width="20%"></img>
            </div>
            <div className="textfield">
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
              <FormControlLabel className="label"
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <div class="buttons">
                <button class="loginBtn loginBtn--continue" >
                  continue
</button>
                <button class="loginBtn loginBtn--facebook" >
                  <i class="fa fa-facebook fa-fw"></i> Login with Facebook
</button>
              </div>  <div class="buttons">
                <button class="loginBtn loginBtn--google" >
                  <i class="fa fa-google fa-fw"></i> Login with Google
</button>
              </div>
              <div class="links">

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </div>

            </div>

          </div>

        </Grid>

      </Grid>
    );
  }
}
/* Exporting the component*/
export default Login
