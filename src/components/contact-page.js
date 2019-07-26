/* importing React Combination
importing material ui Grid layout to adjust screen
importing material-ui TextFeild to add input box*/
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
/* creating a class Contact_page */
class ContactPage extends Component {
  /*creating constructor to intiate array content*/
  constructor(props) {
    super(props)
    this.state = {
      header_text: ["It is all about technology and we have the skills to", " make you stand out ahead! "],
      tagline_text: ["Drop us a line, we are nice people"]
    }
  }
  render() {
    return (
      <div >
        {/*  main gird container*/}
        <Grid container xs={12}>
          {/*calling header_text from list using state*/}
          <Grid item xs={12} align="center" className="header_text">
            {this.state.header_text[0]}<br />
            {this.state.header_text[1]}
          </Grid>
          {/* tag line text*/}
          <Grid contain item xs={12} className="tagline_text">
            {this.state.tagline_text}
          </Grid>
          {/* creating Text feild to input data*/}
          <Grid xs={12}>
            <div class="input_box">
              <TextField className="input_box_background"
                id="placeholder"
                label="Name"
                placeholder="Placeholder"
                margin="normal"
                variant="outlined"
              />
              <TextField className="input_box_background"
                id="placeholder"
                label="Email"
                margin="normal"
                variant="outlined"
              />
              <TextField className="input_box_background"
                label="Mobile Number"
                placeholder="placeholder"
                color="white"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div class="message_box">
              <TextField className="input_box_background"
                multiline
                rows="9"
                style={{ width: 400 }}
                defaultValue="message"
                color="white"
                margin="normal"
                variant="outlined"
                font-color="red"
              />
            </div>
            {/* creating send button */}
            <Grid xs={12} class="submit">
              <button class="button button5">SEND</button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default ContactPage