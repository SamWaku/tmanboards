import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

export default function AdminHome() {
    return (
        <div className="d-flex">
            <div className="w-auto">
                <SideBar />
            </div>
            <div className='w-100'>
                <NavBar/>
                <div className=' d-flex flex-row justify-content-evenly pt-5 mt-5 px-4 gap-4 '>
                    <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Total Users</h2></div>
                    <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Active Users</h2></div>
                    <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Products</h2></div>
                    <div className=' border-5 border w-100 p-5 rounded-4 align-items-center justify-content-center text-center '><h2>Orders</h2></div>
                </div>
            </div>
        </div>
    )
}
