// import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../App.css'

export default function Sidebar() {
  return (
    <div id='sidebar' className='d-flex justify-content-between flex-column text-white py-3 ps-3 p-3 vh-100'>
        <div>
            <a id='link' href="" className='p-3'>
                <i className='bi bi-code-slash fs-4 me-4'></i>
                <span className='fs-3'>User Management</span>
            </a>
            <hr className='text-white mt-2'/>
            <ul className='nav nav-pills flex-column mt-2'>
              <li className='nav-item p-2'>
                <a id='link' href="" className='p-1'>
                  <i className='bi bi-speedometer2 me-3 fs-4'></i>
                  <span className='fs-4'><strong>Dashboard</strong></span>
                </a>
              </li>
              <li className='nav-item p-2'>
                <a id='link' href="" className='p-1'>
                  <i className='bi bi-people me-3 fs-4'></i>
                  <span><strong>Users</strong></span> 
                </a>
              </li>
              <li className='nav-item p-2'>
                <a id='link' href="" className='p-1'>
                  <i className='bi bi-table me-3 fs-4'></i>
                  <span><strong>Orders</strong></span>
                </a>
              </li>
              <li className='nav-item p-2'>
                <a id='link' href="" className='p-1'>
                  <i className='bi bi-grid me-3 fs-4'></i>
                  <span><strong>Report</strong></span>
                </a>
              </li>
            </ul>
        </div>
        <div>
          <hr className='text-secondary'/>
          <div className='nav-item p-2'>
            <a id='link' href="" className='p-1'>
              <i className='bi bi-person-circle me-3 fs-4'></i>
                <span className='fs-4'><strong>cmdpappi</strong></span>
            </a>
          </div>
        </div>
    </div>
  )
}
