/*import the things of react,slider and grid properties */
import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import Grid from '@material-ui/core/Grid'
import { borderColor, typography } from '@material-ui/system';
import { Typography } from '@material-ui/core';

const slideImages = [
    /*images is copyed in slide images */
    require(`../images/web.jpg`),
    require(`../images/web.jpg`),
    require(`../images/web.jpg`)
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


class Slideshow extends Component {
    constructor(props){
        super(props)
       this.state={
         txt1:["Standout by highlighting", "your key strengths..."],
         txt2:["Image Sliders make great","landing pages too..."],
         txt3:["Bring about your greatcustomer","testimonies..."]

        }}
    
render(){
    /*function call for the Slideshow properties and called 3 images */
    return (
        <Grid item xs={12}  >
            <Slide {...properties}>
                <Grid  style={{ 'backgroundImage': `url(${slideImages[0]})`,height:'100vh',backgroundSize:'cover' }}>
                    <Grid container xs="12" style={{height:'100vh',backgroundSize:'cover',position:'relative'}}>
                        
                    
                    <Grid item xs="12"className="App-header"  style={{position:"relative",top:"30%",right:"15%"}}>
                    
                        <Typography variant="h3" align="right">{this.state.txt1[0]}</Typography>
                        <Typography variant="h3"align="right"><b>{this.state.txt1[1]}</b></Typography>
                    </Grid>
                    </Grid>
                    </Grid>
                    
                            
                <Grid  style={{ 'backgroundImage': `url(${slideImages[1]})`,height:'100vh',backgroundSize:'cover' }}>
                <Grid container xs="12" style={{height:'100vh',backgroundSize:'cover',position:'relative'}}>
                        
                        <Grid item xs="7"></Grid>
                        <Grid item xs="5"  className="App-header" style={{position:"relative",top:"30%",right:"15%"}}>
                        
                            <Typography variant="h3" align="right">{this.state.txt2[0]}</Typography>
                            <Typography variant="h3"align="right" ><b>{this.state.txt2[1]}</b></Typography>
                        </Grid>
                        </Grid>
                        </Grid>
                <Grid item xs={12}  style={{ 'backgroundImage': `url(${slideImages[2]})`, height:'100vh',backgroundSize:'cover'}}>
                <Grid container xs="12" style={{height:'100vh',backgroundSize:'cover',position:'relative'}}>
                        
                    
                        <Grid item xs="12" className="App-header"  style={{position:"relative",top:"30%",right:"10%"}}>
                        
                            <Typography variant="h3" align="right">{this.state.txt3[0]}</Typography>
                            <Typography variant="h3"align="right" ><b>{this.state.txt3[1]}</b></Typography>
                        </Grid>
                        </Grid>
                        </Grid>

            </Slide>
        </Grid>
    )
}
}
export default Slideshow