import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
import logo from "../assets/carlogo.png"
import contactimg from "../assets/Icon+bg.png"
import headerbgimg from "../assets/Group 2.png"
import swithc from "../assets/selectarrow.png"

const Home = () => {
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

            {/* Nav */}

            {/* Header */}

            <header>
                <div className="header-box" style={{ backgroundImage: `url(${headerbgimg})` }}>
                    <div className="header-box-texts">
                        <h1>Experience the road like never before</h1>
                        <p>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
                        <button>View all cars</button>
                    </div>
                    <div className="header-box-register">
                        <h1>Book your car</h1>

                        {/* Car dropdown */}

                        <div className="dropdown">
                            <div className="dropdown-texts">
                                <h6>Car</h6>

                                <img style={{ width: "16px", height: "16px", marginTop: "12px" }} src={swithc} alt="" />
                            </div>

                            <ul className="dropdown-list">
                                <p>Sedan</p>
                                <p>SUV</p>
                                <p>Sport</p>
                                <p>Electric</p>
                            </ul>
                        </div>

                        {/* Car dropdown */}

                        {/* Rental place dropdown */}

                        <div className="dropdown">
                            <div className="dropdown-texts-3    ">
                                <h6>Place of rental</h6>

                                <img style={{ width: "16px", height: "16px", marginTop: "12px" }} src={swithc} alt="" />
                            </div>

                            <ul className="dropdown-list">
                                <p>Sedan</p>
                                <p>SUV</p>
                                <p>Sport</p>
                                <p>Electric</p>
                            </ul>
                        </div>

                        {/* Rental place dropdown */}

                        {/* Return place dropdown */}

                        <div className="dropdown">
                            <div className="dropdown-texts-3">
                                <h6>Place of return</h6>

                                <img style={{ width: "16px", height: "16px", marginTop: "12px" }} src={swithc} alt="" />
                            </div>

                            <ul className="dropdown-list">
                                <p>Sedan</p>
                                <p>SUV</p>
                                <p>Sport</p>
                                <p>Electric</p>
                            </ul>
                        </div>

                        {/* Return place dropdown */}

                    </div>
                </div>
            </header>

            {/* Header */}

        </div>
    )
}

export default Home
