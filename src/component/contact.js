import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import Typography from  '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import '../App.css';

const NavBar =() =>{
    return(
        <body class="bg">
        <div class="main">
       
            <div class="header">
               <Typography variant="h3" color="primary">
                  CONTACT US
               </Typography>
            </div>
           
             <div class="quote">  
           
                <Typography variant="title">
                <p>Like What You see</p><p>Talk to Us</p><p>We are nice People</p>
                
                   </Typography>
                </div> 

            <div className="contact">
               
           
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              autoComplete="NAME"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Phone"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            </div>
            <div class="msg">
            <TextField
            variant="outlined"
            margin="normal"
  placeholder="Message"
  multiline={true}
  rows={12}
  rowsMax={6}
/>
            </div>
             <Button variant="contained" color="primary" >
        SEND
      </Button>
        </div>
        </body>
        
    )
}
export default NavBar