import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className=" shadow ">
            <nav className=" d-flex  flex-row justify-content-between py-3 px-4 ">
                <div></div>
                <div className=" d-flex border-2 border rounded-2 align-items-center ">
                    <input
                        type="text"
                        className="border-0 px-2 py-1 focus-ring rounded-2 "
                    />
                    <button className=" border-0 p-0 m-0 bg-white ">
                    <i className='bi bi-search px-2 text-black fs-5 icon-link-hover'></i>
                    </button>
                </div>
                <div className=" text-black d-flex  flex-row gap-4 ">
                    <Link to={"/"}>
                        <i className='bi bi-bell text-black fs-5  icon-link-hover '></i>
                    </Link><Link to={"/"}>
                        <i className=' bi bi-person-circle text-black  fs-5  icon-link-hover '></i>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar