/*  grid is used for screen responsiviness
prop is used to pass data from parent to child */
import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import 'react-animated-slider/build/horizontal.css'
import Slider from 'react-animated-slider'




class Background extends Component { 

  render() {

    return ( 
      
      <Grid container xs={12} className="logo" >
        

      
       <div classNamexs={12} style={{ width: '100%', height: window.innerHeight, position: 'relative'}}>
        
        <Grid className='video-background' >
          <video id="bg_video" autoPlay muted
            src={require(`../images/city_video.mp4`)}
            poster={require(`../images/hong-kong-1990268_1920.jpg`)} />
        </Grid>
        <Grid style={{ position: 'absolute', top: '0', left: '0', zIndex: '10', width: '100%', height: '100%' }}>
          <Slider autoplay={'3000'} duration={'3000'} className="slider-wrapper">
            <div key='1' className="slider-content" >
              <div className="inner">
                <h1>Video backgronds are cool..</h1>
                <p>Video backgronds are a great way of conveying key information about your buisness.</p>
                <button>Curious Customers click here</button>
                
              </div>
             
            </div>
           

            <div key='2' className="slider-content" >
              <div className="inner">
                <h1>Create a first impression</h1>
                <p>Or simply create a great first impression with your Customers</p>
                <button>Customer is in love with you</button>
                
              </div>
              
            </div>
            <Grid XS={12} style={{ position:'absolute',top:'0', left: '0',  zIndex:'10+00', width:'100%', height:'100%' }}/>
           
          
          </Slider>
          

        
       
        </Grid>
      
    
      </div>
      </Grid>
     
    )
    
  }
}
export default Background


