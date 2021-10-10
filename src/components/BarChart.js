import React from 'react'
import './BarChart.css'

function BarGroup(props) {
  return <g className="bar-group">
    <rect width={100} height={100} fill='#000' />
  </g>
}

function Axis(props) {
  return <g>
        <g>
          <text y='-30'>Beginner</text>
          <text y='-30'>Elementary</text>
        </g>
  </g>
}

class BarChart extends React.Component {

  render() {
    let barHeight = 30

   let barGroups = <BarGroup></BarGroup>
                                                  
    let axis = <Axis></Axis>
    
    return <svg className="barcontainer" >
      <g>
        <g className="chart" transform="translate(100,60)">
          {axis}
          {barGroups}
        </g>
      </g>
    </svg>
  }
}

export default BarChart