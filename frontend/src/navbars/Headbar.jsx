import React from "react";
import { Link } from "react-router-dom";

function Headbar() {
    return (
        <nav className="navbar navbar-light p-3 justify-content-evenly align-items-center gap-2" style={{ backgroundColor: '#0E3386' }}>

            <span className="navbar-brand text-white ">Bonoful <span className="d-none d-md-inline">Tours & Travels</span></span>
            
            <Link to='/' className="navbar-brand text-white nav-link cursor-pointer" >
                <span>Home</span>
            </Link>
            <Link to='/about' className="navbar-brand text-white nav-link cursor-pointer">
                <span>About</span>
            </Link>
            <Link to='/tours' className="navbar-brand text-white nav-link text-sm-md cursor-pointer">
                <span>Tours</span>
            </Link>
            <Link to='/login' className="navbar-brand text-white nav-link cursor-pointer">
                <span>Login</span>
            </Link>
            <Link to='/register' className="navbar-brand text-white nav-link cursor-pointer">
                <span>Register</span>
            </Link>
            <Link to='/adminlogin' className="navbar-brand text-white nav-link cursor-pointer">
                <span>Admin</span>
            </Link>
            
        </nav>
    )
}

export default Headbar;









