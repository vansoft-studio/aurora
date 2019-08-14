/* Area chart */
/* import line and material-ui */
import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
/* creating a class for Areachart */
class AreaChart extends Component {
  constructor (props) {
    super(props)

    this.options = {
      animation: {
        duration: 2000
      },
      responsive: true,
      tooltips: {
        mode: 'label'
      },
      elements: {
        line: {
          fill: false
        }
      },

      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false
            },
            labels: {
              show: true
            },
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
          }
        ],
        yAxes: [
          {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          },
          {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          }
        ]
      }
    }
    /* set random data to chart */
    this.state = {
      data: {
        datasets: [{
          label: 'my first dataset',
          type: 'line',
          data: [this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize()],
          fill: true,
          borderColor: 'rgba(255, 255, 255, 0.4)',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          pointBorderColor: 'rgba(255, 255, 255, 0.4)',
          pointBackgroundColor: 'rgba(255, 255, 255, 0.4)',
          pointHoverBackgroundColor: 'rgba(255, 255, 255, 0.4)',
          pointHoverBorderColor: 'rgba(255, 255, 255, -.4)',
          yAxisID: 'y-axis-2',
          showLine: true
        }, {
          type: 'line',
          label: 'second dataset',
          data: [this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize()],
          fill: true,
          backgroundColor: '#71B37C',
          borderColor: '#71B37C',
          hoverBackgroundColor: '#71B37C',
          hoverBorderColor: '#71B37C',
          yAxisID: 'y-axis-1',
          showLine: true
        },
        {
          type: 'line',
          label: 'Third dataset',
          data: [this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize()],
          fill: true,
          borderColor: 'red',
          backgroundColor: 'red',
          pointBorderColor: 'red',
          pointBackgroundColor: 'red',
          pointHoverBackgroundColor: 'red',
          pointHoverBorderColor: 'red',
          yAxisID: 'y-axis-2',
          stacked: 'true',
          showLine: true
        }]
      }
    }
  }

  randommize () {
    return ((Math.random() * 2000) - 1000)
  }

  componentDidMount () {
    setInterval(() => {
      this.setState(
        {
          data: {
            datasets: [{
              label: 'my first dataset',
              type: 'line',
              data: [this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize()],
              fill: true,
              borderColor: 'rgba(255, 255, 255, 0.4)',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              pointBorderColor: 'rgba(255, 255, 255, 0.4)',
              pointBackgroundColor: ' rgba(255, 255, 255, 0.4)',
              pointHoverBackgroundColor: 'rgba(255, 255, 255, 0.4)',
              pointHoverBorderColor: 'rgba(255, 255, 255, 0.4)',
              yAxisID: 'y-axis-2',
              showLine: true
            }, {
              type: 'line',
              label: 'second dataset',
              data: [this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize()],
              fill: true,
              backgroundColor: '#71B37C',
              borderColor: '#71B37C',
              hoverBackgroundColor: '#71B37C',
              hoverBorderColor: '#71B37C',
              yAxisID: 'y-axis-1',
              showLine: true
            },
            {
              type: 'line',
              label: 'Third dataset',
              data: [this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize(), this.randommize()],
              fill: true,
              borderColor: 'purple',
              backgroundColor: 'purple',
              pointBorderColor: 'purple',
              pointBackgroundColor: 'purple',
              pointHoverBackgroundColor: 'purple',
              pointHoverBorderColor: 'purple',
              yAxisID: 'y-axis-2',
              stacked: 'true',
              showLine: true
            }]
          }

        }
      )
    }, 2000)
  }

  render () {
    return (
      <Grid>
        <Typography align='center' style={{ fontSize: '400%', fontWeight: 'bold' }}>Bring out the WOW!!</Typography>
        <Typography align='center'style={{ fontSize: '300%' }}>  by visualizing it</Typography>
        <br />
        <Line height='175%' data={this.state.data} options={this.options} />
      </Grid>
    )
  }
}

export default AreaChart
