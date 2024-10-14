import React from 'react'
import { Link } from 'react-router-dom'

export const AdminHeadbar = ({ adminlogouthandler }) => {
    return (
        <nav className="navbar navbar-light p-3 justify-content-evenly align-items-center gap-2 " style={{ backgroundColor: '#0E3386' }}>
            <span className="navbar-brand text-white">Bonoful <span className="d-none d-md-inline">Tours & Travels</span></span>

            <Link to='/admin' className="navbar-brand text-white nav-link text-sm-md cursor-pointer">
                <span>All Tours</span>
            </Link>
            
            <Link to='/addtour' className="navbar-brand text-white nav-link text-sm-md cursor-pointer">
                <span>Add Tour</span>
            </Link>

            <Link to='/dashboard' className="navbar-brand text-white email text-sm-md rounded-circle bg-primary">
                <span>AD</span>
            </Link>

            <div onClick={adminlogouthandler} className="navbar-brand text-white nav-link text-sm-lg cursor-pointer">Logout</div>
        </nav>
    )
}
