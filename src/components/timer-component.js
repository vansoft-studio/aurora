/*  this is a timer-component */
import React, { Component } from 'react'
import '../App.css'
import SimpleTable from './table'
import { Grid } from '@material-ui/core'
import MenuBar from './menu'
/* inserting table data */
const tableHeader = { 1: 'Name', 2: 'Age', 3: 'Gender', 4: 'Member', 5: 'Email', 6: 'Status' }
const tableData = [{ 1: { name: 'Michael Brown', avatar: './14.jpg' }, 2: '21', 3: 'M', 4: true, 5: 'michaelus123@gmail.com', 6: { status: 'Manager' } },
  { 1: { name: 'David Miller', avatar: './1.jpg' }, 2: '23', 3: 'M', 4: false, 5: 'David996miller@ymail.com', 6: { status: 'Tester' } },
  { 1: { name: 'Daisy', avatar: './2.jpg' }, 2: '28', 3: 'F', 4: false, 5: 'daisy1992@ymail.com', 6: { status: 'Developer' } },
  { 1: { name: 'Camille Jonson', avatar: './3.jpg' }, 2: '21', 3: 'F', 4: false, 5: 'Camillejay12@ymail.com', 6: { status: 'Developer' } },
  { 1: { name: 'David williams', avatar: './12.jpg' }, 2: '25', 3: 'M', 4: true, 5: 'David28kas@ymail.com', 6: { status: 'Developer' } }
]
/* Timer settings using count increment */
class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = { currentCount: 1 }
  }

  timer () {
    this.setState({
      currentCount: this.state.currentCount + 1
    })

    if (this.state.currentCount > 5) {
      clearInterval(this.intervalId)
    }
  }

  componentDidMount () {
    this.intervalId = setInterval(this.timer.bind(this), 2000) // 2 second
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    let menubar // menubar and table is initialise
    let table
    if (this.state.currentCount >= 1) {
      menubar = (<MenuBar />) //  menu component calling
    }
    if (this.state.currentCount >= 2) {
      table = (<SimpleTable // table component calling
        TableHeader={tableHeader}
        TableData={tableData}
        Switch='4'
        CheckBox />)
    }

    return (<div>
      <Grid className='slide-in-left'>

        {menubar}
      </Grid>
      <Grid style={{ overflowX: 'auto' }}>
        {table}
      </Grid>

    </div>

    )
  }
}

export default Timer
