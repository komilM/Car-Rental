import React from 'react'
import "./Contact.css"
import { NavLink } from 'react-router-dom'
import logo from "../assets/carlogo.png"
import contactimg from "../assets/Icon+bg.png"
import swithc from "../assets/selectarrow.png"
import contactheaderimg from "../assets/img4.png"
import contactimgmap from "../assets/map-pin.png"
import contactemail from "../assets/mail.png"
import contactphone from "../assets/phone.png"
import contactclock from "../assets/clock.png"


const Contact = () => {
    return (
        <div>

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

            <div className="contact-header">
                <h5>Contact Us</h5>

                <div className="header-booking">
                    <div className="header-box-register1">
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

                                <img style={{ width: "16px", height: "16px", marginTop: "12px", marginLeft: "-10px" }} src={swithc} alt="" />
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

                                <img style={{ width: "16px", height: "16px", marginTop: "12px", marginLeft: "-10px" }} src={swithc} alt="" />
                            </div>

                            <ul className="dropdown-list">
                                <p>Sedan</p>
                                <p>SUV</p>
                                <p>Sport</p>
                                <p>Electric</p>
                            </ul>
                        </div>

                        {/* Return place dropdown */}

                        {/* Date of rental */}

                        <input type="date" placeholder='Rental date' />

                        <input type="date" placeholder='Return date' />

                        {/* Date of rental */}

                        {/* Register btns */}

                        <button>Book now</button>

                        {/* Register btns */}

                    </div>

                    <img src={contactheaderimg} alt="" />

                </div>

                <div className="header-contact-numbers">
                    
                    <div className="contacts">
                        <img src={contactimgmap} style={{ width: "64px", height: "64px", backgroundColor: "#FF9E0C", borderRadius: "32px", padding: "18px" }} />
                        <div className="contacts-texts">
                            <p>Address</p>
                            <h2>Oxford Ave. Cary, NC 27511</h2>
                        </div>
                    </div>

                    <div className="contacts">
                        <img src={contactemail} style={{ width: "64px", height: "64px", backgroundColor: "#FF9E0C", borderRadius: "32px", padding: "18px" }} />
                        <div className="contacts-texts">
                            <p>Email</p>
                            <h2>nwiger@yahoo.com</h2>
                        </div>
                    </div>

                    <div className="contacts">
                        <img src={contactphone} style={{ width: "64px", height: "64px", backgroundColor: "#FF9E0C", borderRadius: "32px", padding: "18px" }} />
                        <div className="contacts-texts">
                            <p>Phone</p>
                            <h2>+537 547-6401</h2>
                        </div>
                    </div>

                    <div className="contacts">
                        <img src={contactclock} style={{ width: "64px", height: "64px", backgroundColor: "#FF9E0C", borderRadius: "32px", padding: "18px" }} />
                        <div className="contacts-texts">
                            <p>Opening hours</p>
                            <h2>Sun-Mon: 10am - 10pm</h2>
                        </div>
                    </div>

                </div>

            </div>

            {/* Header */}

            <div className="contact-secion">

            </div>
        </div>
    )
}

export default Contact
