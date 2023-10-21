import { LineElement } from 'chart.js'
import React from 'react'
import { Chart } from 'react-charts'

function Metrics() {
  const data = [
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
    () => [
      {
        getValue: datum => datum.stars,
      },
    ],
    []
  )

  return (
    <div>
      <div className=' d-flex flex-row justify-content-evenly pt-5 mt-2 px-4 gap-4 '>
        <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '>
          <i className=' bi bi-people-fill '></i>
          <div>
            <span>Total Users</span>
            <p>100</p>
          </div>
        </div>
        <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '>
        <i class="bi bi-person-check-fill"></i>
          <div>
            <span>Active Users</span>
            <p>20</p>
          </div>
        </div>
        <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '>
        <i class="bi bi-bag-dash-fill"></i>
          <div>
          <span>Products</span>
          <p>500</p>
          </div>
        </div>
        <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '>
        <i class="bi bi-cart-check-fill"></i>
          <div>
          <span>Orders</span>
          <p>40</p>
          </div>
        </div>
      </div>
      <div className=' d-flex  flex-row justify-content-evenly px-4 gap-4 mt-4'>
        <div style={{ paddingTop: 150, paddingBottom: 200 }} className=' border-5 border w-100 rounded-4 d-flex align-items-center  justify-content-center'><Chart className=' mt-5 ' options={{ data, primaryAxis, secondaryAxes }} /></div>
        <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center'>2</div>
      </div>
    </div>
  )
}

export default Metrics