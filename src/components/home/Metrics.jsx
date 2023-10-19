import { LineElement } from 'chart.js'
import React from 'react'
import { Chart } from 'react-charts'

function Metrics() {
      const data= [
        {
          label: 'React Charts',
          data: [
            {
              date: new Date(),
              stars: 20,
            }
            // ...
          ]
        },
        {
          label: 'React Query',
          data: [
            {
              date: new Date(),
              stars: 1,
            }
            // ...
          ]
        }
      ]

    const primaryAxis = React.useMemo(
        () => ({
          getValue: datum => datum.date,
        }),
        []
      )
    
      const secondaryAxes = React.useMemo(
        ()=> [
          {
            getValue: datum => datum.stars,
          },
        ],
        []
      )

    return (
        <div>
            <div className=' d-flex flex-row justify-content-evenly pt-5 mt-5 px-4 gap-4 '>
                <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Total Users</h2></div>
                <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Active Users</h2></div>
                <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Products</h2></div>
                <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Orders</h2></div>
            </div>
            <div className=' d-flex  flex-row justify-content-evenly px-4 gap-4 mt-4'>
                <div style={{paddingTop:150, paddingBottom:200}} className=' border-5 border w-100 rounded-4 d-flex align-items-center  justify-content-center'><Chart className=' mt-5 ' options={{data, primaryAxis,secondaryAxes}}/></div>
                <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center'>2</div>
            </div>
        </div>
    )
}

export default Metrics