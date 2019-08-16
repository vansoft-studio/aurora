/* Importing Grid,react,style and Timer component  */

import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import './App.css'
import Timermain from './components/timer-main'
import SocialNetwork from './components/socialnetwork'
import MainChart from './components/mainchart'
import Pageaws from './components/aws-page'
import Slideshow from './components/image-slider'
import Loginpage from './components/loginmain'
import Contact from './components/contact-page'
import Language from './components/language_frame'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { currentCount: 1 }
  }

  timer () {
    this.setState({
      currentCount: this.state.currentCount + 1
    })

    if (this.state.currentCount > 8) {
      clearInterval(this.intervalId)
    }
  }

  componentDidMount () {
    this.intervalId = setInterval(this.timer.bind(this), 7500)
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    let imageslider
    let table
    let graph
    let socialnetwork
    let baloon
    let language
    let login
    let contactpage
    if (this.state.currentCount === 1) {
      table = (<Slideshow />)
    }
    if (this.state.currentCount === 2) {
      graph = (<Timermain />)
    }
    if (this.state.currentCount === 3) {
      imageslider = (<MainChart />)
    }
    if (this.state.currentCount === 4) {
      login = (<SocialNetwork />)
    }
    if (this.state.currentCount === 5) {
      socialnetwork = (<Pageaws />)
    }
    if (this.state.currentCount === 6) {
      baloon = (<Language />)
    }
    if (this.state.currentCount === 7) {
      contactpage = (<Loginpage />)
    }
    if (this.state.currentCount >= 8) {
      language = (<Contact />)
    }

    return (
      <Grid>

        {table}
        {graph}
        {imageslider}
        {login}
        {socialnetwork}
        {baloon}
        {contactpage}
        {language}
      </Grid>

    )
  }
}

export default App
