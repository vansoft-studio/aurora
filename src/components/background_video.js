/*  grid is used for screen responsiviness
prop is used to pass data from parent to child */
import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
class Background extends Component {
  constructor(props) {
    super(props);                       /*using props function */
    this.state = {
      text1: " video background",
      text2: "IS THE NEW COOL THING",
      text3: "would you like it on your website?"        /*main texts */
    }
  }
  render() {
    return (
      <Grid container xs={12}>                                                 
        <Grid item xs={12} class="content" >
          <p class="item-1">{this.state.text1}</p>
          <p class="item-2">{this.state.text2}</p>
          <p class="item-3">{this.state.text3}</p>
        </Grid>
        <video id="bg_video" autoPlay muted loop src={require(`../../public/assets/background_video/city_video.mp4`)} width="1000px" height="1000px" />    
      </Grid>
    ) 
  }
}
export default Background
