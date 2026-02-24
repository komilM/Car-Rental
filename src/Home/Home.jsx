import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
import logo from "../assets/carlogo.png"
import contactimg from "../assets/Icon+bg.png"
import headerbgimg from "../assets/Group 2.png"

const Home = () => {
    return (
        <div>
            <nav>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>Car Rental </p>
                </div>
                <div className="nav-texts">
                    <NavLink to="/" className="navtext">Home</NavLink>
                    <NavLink to="/vehicles" className="navtext">Vehicles</NavLink>
                    <NavLink to="/details" className="navtext">Details</NavLink>
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
            <header>
                <div className="header-box" style={{ backgroundImage: `url(${headerbgimg})` }}>
                    <div className="header-box-texts">
                        <h1>Experience the road like never before</h1>
                        <p>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
                        <button>View all cars</button>
                    </div>
                    <div className="header-box-register">
                        <h1>Book your car</h1>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home
