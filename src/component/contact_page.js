/* importing React Combination
importing material ui Grid layout to adjust screen
importing material-ui TextFeild to add input box*/
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core';
import { positions } from '@material-ui/system';
import { relative } from 'path';
/* creating a class Contact_page */
class ContactPage extends Component {
  /*creating constructor to intiate array content*/
  constructor(props) {
    super(props)
    this.state = {
      header_text:

        ["It is all about technology and we have the skills to", " make you stand out ahead! "],
      tagline_text: ["Drop us a line, we are nice people"]

    }
  }
  render() {
    return (


      <Grid container style={{ height: '100vh', overflow: 'scroll' }}>
        {/*calling header_text from list using state*/}
        <Grid item xs={12} className="header_text" style={{  height: '35%', textAlign: 'center', justifyItems: 'center', paddingTop: '9%' }} spacing={3}>
          <Typography variant="h3" > {this.state.header_text[0]}<br /></Typography>
          <Typography variant="h3" > {this.state.header_text[1]}</Typography>
        </Grid>
        {/* tag line text*/}
        <Grid item xs={12} className="tagline_text" style={{  height: '15%', textAlign: 'center' }}>
          {this.state.tagline_text}

          {/* creating Text feild to input data*/}

        </Grid>
        <Grid container xs={12} style={{ height: '50%', positions:relative,  }}  spacing={3} >
          <Grid item xs={12} sm={3} md={2} className="input_box" style={{  }}>
            



            <TextField className="input_box_background"
              id="placeholder"
              label="Name"
              placeholder="Placeholder"
              style={{ width: '100%' }}
              variant="outlined"



            />
            <TextField className="input_box_background"
              id="placeholder"
              label="Email"
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
            />
            <TextField className="input_box_background"
              label="Mobile Number"
              placeholder="placeholder"
              color="white"
              style={{ width: '100%' }}

              variant="outlined"
            />
            </Grid>
        

          <Grid item xs={12} md={3} sm={3} className="message_box" style={{  }} width="20%">

            <TextField className="input_box_background"
              multiline
              fullWidth={true}
              multiline={true}
              rows={8}
              style={{ width: '50%' }}
              defaultValue="message"
              color="white"

              variant="outlined"
              font-color="red"
            />




          </Grid>

          {/* creating send button */}


          <Grid item xs={12} md={2} sm={1} style={{
            
            textAlign: 'center', position: 'relative', top: '10%', right: '2%', height: '40%'
            /* ,zIndex:'500',position:"absolute",left:'70%',bottom:'29%' */
}}
          >
            <Grid className="submit">
              <button class="button button5">SEND</button>
            </Grid>
          </Grid>

        </Grid>
      </Grid>







    )
  }
}
export default ContactPage