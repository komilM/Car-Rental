import React, { useEffect, useState } from 'react'
import "./Details.css"
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import logo from "../assets/carlogo.png"
import contactimg from "../assets/Icon+bg.png"



const Details = () => {

    const location = useLocation();

    const name = location.state?.name;
    const email = location.state?.email;

    useEffect(() => {
        alert("Account created")
    }, [])

    return (
        <div className='body'>

            {/* Nav */}

            <nav>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>Car Rental </p>
                </div>
                <div className="nav-texts">
                    <NavLink to="/" className="navtext">Home</NavLink>
                    <NavLink to="/vehicles" className="navtext">Vehicles</NavLink>
                    <NavLink to="/about" className="navtext">About Us</NavLink>
                    <NavLink to="/contact" className="navtext">Contact Us</NavLink>
                </div>
                <div className="nav-contact">
                    <img src={contactimg} alt="" />
                    <div className="nav-contact-texts">
                        <p>Need help?</p>
                        <h2>+996 247-1680</h2>
                    </div>
                </div>
            </nav>

            {/* Nav */}

            <h1 style={{ textAlign: "center", fontSize: "80px", fontWeight: "700", marginTop: "100px" }}>Car rented for</h1>
            <h2 style={{ textAlign: "center", fontSize: "35px", fontWeight: "600", marginTop: "35px" }}>Name: {name}</h2>
            <h3 style={{ textAlign: "center", fontSize: "28px", fontWeight: "600", marginTop: "35px" }}> Email:  {email}</h3>

        </div>
    )
}

export default Details
