import React from 'react'
import "./About.css"
import { NavLink } from 'react-router-dom'
import logo from "../assets/carlogo.png"
import contactimg from "../assets/Icon+bg.png"
import headerimgvideo from "../assets/Img+ button.png"

const About = () => {
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

            <div className="about-header">
                <h1 style={{textAlign: "center", fontSize: "50px", fontWeight: "700", marginTop: "60px"}}>About Us</h1>
                <div className="header-about-texts">
                    <h1>Where every drive feels extraordinary</h1>
                    <div className="header-about-text-1">
                        <h2>Variety Brands</h2>
                        <p>Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio</p>
                        <h2 style={{marginTop: "24px"}}>Maximum Freedom</h2>
                        <p>Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in</p>
                    </div>
                    <div className="header-about-text-1">
                        <h2>Awesome Suport</h2>
                        <p>Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit</p>
                        <h2 style={{marginTop: "20px"}}>Flexibility on the go</h2>
                        <p>Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl</p>
                    </div>
                </div>
                <img src={headerimgvideo} style={{marginLeft: "7%", marginTop: "120px"}} />
                <div className="header-img-numbers">
                    <div className="header-img-number">
                        <h1>20k+</h1>
                        <p>Happy customers</p>
                    </div>
                    <div className="header-img-number">
                        <h1>540+</h1>
                        <p>Count of cars</p>
                    </div>
                    <div className="header-img-number">
                        <h1>25+</h1>
                        <p>Years of experince</p>
                    </div>
                </div>
            </div>

            {/* Header */}

        </div>
    )
}

export default About
