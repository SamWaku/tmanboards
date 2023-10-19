import React from 'react'

function Metrics() {
    return (
        <div>
            <div className=' d-flex flex-row justify-content-evenly pt-5 mt-5 px-4 gap-4 '>
                <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Total Users</h2></div>
                <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Active Users</h2></div>
                <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Products</h2></div>
                <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Orders</h2></div>
            </div>
            <div className=' d-flex  flex-row justify-content-evenly px-4 gap-4 mt-4 '>
                <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center'>1</div>
                <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center'>2</div>
            </div>
        </div>
    )
}

export default Metrics