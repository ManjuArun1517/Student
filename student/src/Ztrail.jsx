import React from 'react'
import { Bar } from 'react-chartjs-2';

const Ztrail = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Sample Data',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'red',
              'blue',
              'yellow',
              'green',
              'purple',
              'orange',
            ],
          },
        ],
      };
    
  return (
    <div>
      <div>
      <h2>Bar Chart Example</h2>
      <Bar data={data} />
    </div>
    </div>
  )
}

export default Ztrail
