import React, { Component } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles((theme:Theme) => createStyles({
  root: {
    backgroundColor: 'blue',
  },
  contactContainer: {
    
    height: '100vh',
    
  },
  contactText: {
    
    
    height: '40%',
    paddingTop :'5%',
   
    
    [theme.breakpoints.down('md')]: {
        height: '30%',
        fontSize:'100%',
      },
    [theme.breakpoints.down('sm')]:{
        height:'25%',
        fontSize:'100%',
    } ,
    [theme.breakpoints.down('xs')]:{
      height:'25%',
      fontSize:'70%',
  } ,
    
  },
  contactText1:{ 
      fontSize:'200%',
      fontWeight:'100',
      
      
      textAlign:'center',
      fontFamily:'Arial Narrow'

  },
  contactText2:{
      color:'gold',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:'100%'

  },
  box2:{
    
    height:'70%',
    width:'100%',
    padding:'6%'
  },
  contactTextBox: {
    
    
    height: '60%',
    [theme.breakpoints.down('md')]: {
      height: '70%',
    },
      [theme.breakpoints.down('sm')]:{
        height:'30%',
    },
    [theme.breakpoints.down('xs')]:{
      height:'35%',
  },
  },
  contactTextBoxTextField: {
    
   
    height: '17',
    width: '60%',
    
    [theme.breakpoints.down('md')]: {
      height: '7%',
    },
    [theme.breakpoints.down('sm')]: {
        height: '25%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
      overflow:'hidden'
     
  },
   
    
  },
  contactTextMessage: {
    
   
    height: '60%',
    [theme.breakpoints.down('md')]: {
      height:'70%',
    
    } ,
    [theme.breakpoints.down('sm')] :{
      height:'30%',
    },
      [theme.breakpoints.down('xs')] :{
        height:'30%',
     
      
      

    } ,
  },
    contactTextMessageWidth:{
      width: '80%',
      overflow:'hidden',
      [theme.breakpoints.down('sm')] :{
        width:'60%',
      },
      [theme.breakpoints.down('sm')] :{
        height:'80%',
      },
  },
  contactTextButton: {
   
    height:'60%',
    [theme.breakpoints.down('md')]:{
     height:'70%' ,
    },
     [theme.breakpoints.down('sm')] :{
      height:'15%',
     },
      [theme.breakpoints.down('sm')] :{
        height:'10%',

      
      
    } ,
   
    
  },
  contactButton:{
    width:'20%',
    height:'90%',
    background:'deepskyblue',
    border:' none',
    color:'white',
    
    
    
    textAlign: 'cente',
    font: 'bold',
    textDecoration:'none',
    
    fontSize: '60%',
    
    borderRadius:'50%',
    [theme.breakpoints.down('sm')]: {
      
      height:'80%',
      width:'40%',
      fontSize: '80%',
  
        
      },
      [theme.breakpoints.down('xs')]:{
    
        
        height:'100%',
      width:'35%',
      fontSize: '70%',
        
      
     },
  },
  placeholder: {
    color: 'red',
    opacity: '1',
    
 },
 contactTextButtonAlign:{
 
  width: '100%', 
  height: '25%',
  paddingLeft:'20%',
  
  
   [theme.breakpoints.down('md')]:{
    
    height:'12%',
    width:'100%',
    
    
   },
   [theme.breakpoints.down('sm')]:{
    
    height:'100%',
    width:'100%',
    
    paddingLeft:'38%'
   },
   
 },
    
}));


function Contact(){
  
  const theme = useTheme()
  const classes = useStyles()
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container className={classes.contactContainer} >
        <Grid item xs={12} md={12} className={classes.contactText}>
            <Typography className={classes.contactText1}>It is all about technology and we have the skills to <br/>
            make you stand out ahead!</Typography>
            <Typography className={classes.contactText2}>Drop us a line, we are nice people</Typography>
    

        </Grid>
        
        <Grid item xs={12} md={4} className={classes.contactTextBox} >
          <Grid container direction="column" justify='center' alignItems='center' style={{ height: '100%' }}>
            <Grid item className={classes.contactTextBoxTextField} ><TextField 
            
            id="contact_name"
            label="Name"
            placeholder="Name"
            style={{ backgroundColor:'#CBCAC9',
            opacity:'.4',
            color: 'aliceblue',
            width:'100%'
          }}
            
            
            variant="outlined"
            /></Grid>
            <Grid item className={classes.contactTextBoxTextField}><TextField 
            id="contact_email"
            label="Email"
            placeholder="Email"
            style={{backgroundColor:'#CBCAC9',
            opacity:'.4',
            color: 'aliceblue',
            width:'100%'}}
            variant="outlined"
            /></Grid>
            <Grid item className={classes.contactTextBoxTextField} ><TextField
            id="contact_phone"
            label="Phone"
            placeholder="Phone"
            style={{backgroundColor:'#CBCAC9',
            opacity:'.4',
            color: 'aliceblue',
            width:'100%'}}
            variant="outlined"
            

            /></Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={12} md={4} className={classes.contactTextMessage}>
          <Grid container justify='center' alignItems='center' style={{ height: '100%' }} >
            <Grid item style={{ }} className={classes.contactTextMessageWidth}>
              <TextField variant="outlined" multiline rows="8" fullWidth 
              
              id="contact_message"
              label="Message"
              placeholder="Message"
              
              variant="outlined"
              style={{backgroundColor:'#CBCAC9',
              opacity:'.4',
              color: 'aliceblue'}}
              
              color="white"
              
              variant="outlined"
              font-color="red"
              />
               
            </Grid>
            
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} className={classes.contactTextButton}>
          <Grid container  alignItems='center' style={{ height: '100%' }} >
            <Grid item  className={classes.contactTextButtonAlign}>
              <Button variant='outlined' color='secondary' size='large' className={classes.contactButton} style={{}} >

                 SEND
              </Button>
              <Grid style={{textAlign:"center"}}>
             
              <div itemscope itemtype="https://schema.org/LocalBusiness">
<h1 itemprop="name">call</h1>
Phone: <span itemprop="telephone"><a href="tel:+123456890">
234567890</a></span>
</div></Grid>
             
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      
    </React.Fragment>
  )
        
}

export default Contact