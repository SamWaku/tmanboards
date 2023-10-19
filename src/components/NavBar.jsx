import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className=" shadow ">
            <nav className=" d-flex  flex-row justify-content-between py-3 px-4 ">
                <div></div>
                <div className=" d-flex align-items-center ">
                    <input
                        type="text"
                        className=" border rounded-2 px-2 py-1"
                    />
                    <i className='bi bi-search px-1 text-black fs-5 me-4 icon-link-hover'></i>
                </div>
                <div className=" text-black ">
                    <Link to={"/"}>
                        <i className='bi bi-bell text-black fs-5 me-4 icon-link-hover '></i>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar