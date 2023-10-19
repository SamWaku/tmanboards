import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("username: ", username);
        console.log("password: ", password)
    }

    return (
            <div className="row justify-content-center bg-dark vw-100  vh-100 align-items-center">
                <div className="col-md-4 col-sm-auto ">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-4 ">
                                    <label htmlFor="username" className='mb-2 fw-bold'>Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) => setusername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-4 ">
                                    <label htmlFor="password" className='mb-2 fw-bold'>Password</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className=' flex-column d-flex'>
                                    <Link to={'/admin'} className="mt-1 w-100 ">
                                        <button type="submit" className="btn btn-primary btn-block w-100 ">
                                            Login
                                        </button>
                                    </Link>
                                    <Link to={"/register"} className=' text-center my-4 text-secondary text-decoration-none '>Don't have account yet?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}
