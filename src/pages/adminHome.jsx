import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Metrics from '../components/home/Metrics'

export default function AdminHome() {
    return (
        <div className="d-flex">
            <div className="w-auto">
                <SideBar />
            </div>
            <div className='w-100'>
                <NavBar/>
                <Metrics/>
            </div>
        </div>
    )
}
