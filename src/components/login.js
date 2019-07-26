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
class Login extends Component {
  render() {

    return (
      <Grid item xs={12}>
        <Grid item xs={12} sm={6} class="login_box">
          <div className="main">
            <div align="center"><br />
              <img align="center" src={require(`../images/man.png`)} width="20%"></img>
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
              <input type="button" class="buttons" value="Continue"></input>
              <Grid item xs={12} class="socialb">
                <FacebookLoginButton onClick={() => alert("successfully logined")} class="socialb" />
                <div>
                  <GoogleLoginButton />
                </div>
              </Grid>
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
