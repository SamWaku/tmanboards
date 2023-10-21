// import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../style.css'
import { useState } from 'react'

export default function Sidebar() {
  const [active, setActive] = useState(1)

  return (
    <div id='sidebar' className=' sidebar d-flex justify-content-between flex-column text-white py-3 ps-3 p-3 vh-100'>
      <div>
        <a href="" className='p-3 d-flex flex-row text-decoration-none  text-white '>
          <i className='bi bi-code-slash fs-4 me-4'></i>
          <span className=''>User Management</span>
        </a>
        <hr className='text-white mt-2' />
        <ul id='outerlist' className='nav nav-pills flex-column mt-2'>
          <li className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={e => setActive(1)}>
            <span className='p-1'>
              <i className='bi bi-speedometer2 me-3 fs-4'></i>
              <span>Dashboard</span>
            </span>
          </li>
          <li className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={e => setActive(2)}>
            <span className='p-1'>
              <i className='bi bi-people me-3 fs-4'></i>
              <span>Users</span>
            </span>
          </li>
          <li className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={e => setActive(3)}>
            <span className='p-1'>
              <i className='bi bi-table me-3 fs-4'></i>
              <span>Orders</span>
            </span>
          </li>
          <li className={active === 4 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={e => setActive(4)}>
            <span className='p-1'>
              <i className='bi bi-grid me-3 fs-4'></i>
              <span>Report</span>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <hr className='text-secondary' />
        <div className='nav-item p-2'>
          <span className='p-1 text-decoration-none  text-white '>
            <i className='bi bi-person-circle me-3 fs-4'></i>
            <span className='fs-4'>cmdpappi</span>
          </span>
        </div>
      </div>
    </div>
  )
}
