/*import the things of react,slider and grid properties */
import React from 'react';
import { Slide } from 'react-slideshow-image';
import Grid from '@material-ui/core/Grid'

const slideImages = [
  /*images is copyed in slide images */
  require(`../Image-slider-images/first.jpg`),
  require(`../Image-slider-images/second.jpg`),
  require(`../Image-slider-images/third.jpg`)
];

const properties = {
  /*properties of image slider for the transmition speed,duration etc */
  duration: 2500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  /*function call for the Slideshow properties and called 3 images */
  return (
    <Grid item xs={12}>
      <Slide {...properties}>
        <Grid item xs={12} className="each-slide">
          <Grid item xs={12} style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
            <span> Image Sliders make great landing pages too...</span>

          </Grid>
        </Grid>

        <Grid item xs={12} className="each-slide">
          <Grid item xs={12} style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
            <span-1>Standout by highlighting your  <br /> key strengths...</span-1>
          </Grid>
        </Grid>
        <Grid item xs={12} className="each-slide">
          <Grid item xs={12} style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
            <span-2>Brag about your great customer testimonies...</span-2>
          </Grid>
        </Grid>
      </Slide>
    </Grid>
  )
}
export default Slideshow