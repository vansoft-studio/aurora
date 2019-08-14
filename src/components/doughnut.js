import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'
class Doughnut1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chartData: {
        labels: ['Vancover', 'Alaska', 'Torento'],
        datasets: [
          {
            label: 'populaton',
            data: [
              12343,
              21362,
              17535,
              16533,
              17356,
              17653
            ],
            backgroundColor: [
              'rgba(255,99,132,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(255,206,86,0.6)',
              'rgba(153,102,255,0.6)',
              'rgba(255,159,64,0.6)',
              'rgba(54,162,235,0.6)'

            ]
          }

        ]

      }
    }
  }

  render () {
    return (
      <div className='chart'>
        <Doughnut
          data={this.state.chartData}

          options={{
            animation: {
              duration: 6000
            }

          }}
        />
      </div>
    )
  }
}
export default Doughnut1
