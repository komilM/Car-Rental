import React from 'react'
import "./About.css"
import { NavLink } from 'react-router-dom'
import logo from "../assets/carlogo.png"
import contactimg from "../assets/Icon+bg.png"
import headerimgvideo from "../assets/Img+ button.png"
import sectioncommentimgs1 from "../assets/Img88888.png"
import sectioncommentimgs2 from "../assets/Img9999999.png"
import sectioncommentimgs3 from "../assets/Img10101010.png"
import h1carfoot from '../assets/Group555.png'
import carjpgimg from "../assets/car55555.png"
import headercar from "../assets/Imgs.png"
import footerimg from "../assets/Footer.png"

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
                <h1 style={{ textAlign: "center", fontSize: "50px", fontWeight: "700", marginTop: "60px" }}>About Us</h1>
                <div className="header-about-texts">
                    <h1>Where every drive feels extraordinary</h1>
                    <div className="header-about-text-1">
                        <h2>Variety Brands</h2>
                        <p>Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio</p>
                        <h2 style={{ marginTop: "24px" }}>Maximum Freedom</h2>
                        <p>Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in</p>
                    </div>
                    <div className="header-about-text-1">
                        <h2>Awesome Suport</h2>
                        <p>Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit</p>
                        <h2 style={{ marginTop: "20px" }}>Flexibility on the go</h2>
                        <p>Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl</p>
                    </div>
                </div>
                <img src={headerimgvideo} style={{ marginLeft: "7%", marginTop: "120px" }} />
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

            {/* Section */}

            <div className="section-comments">
                <h1 style={{ textAlign: "center", fontSize: "50px", fontWeight: "700", marginTop: "60px" }}>Reviews from our customers</h1>
                <div className="section-comments-items">
                    <div className="section-comments-item">
                        <h1>"</h1>
                        <p> Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque </p>
                        <img src={sectioncommentimgs1} style={{ marginTop: "60px" }} />
                        <div className="section-comments-imgs" style={{ marginTop: "147px" }}>
                            <p>Kuphal LLC</p>
                            <h2>Emanuel Boyle</h2>
                        </div>
                    </div>

                    <div className="section-comments-item">
                        <h1>"</h1>
                        <p> Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula</p>
                        <img src={sectioncommentimgs2} style={{ marginTop: "80px" }} />
                        <div className="section-comments-imgs" style={{ marginTop: "170px" }}>
                            <p>Glover - Orn</p>
                            <h2>River Graves</h2>
                        </div>
                    </div>

                    <div className="section-comments-item">
                        <h1>"</h1>
                        <p> Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et</p>
                        <img src={sectioncommentimgs3} style={{ marginTop: "60px" }} />
                        <div className="section-comments-imgs" style={{ marginTop: "147px" }}>
                            <p>Haag LLC</p>
                            <h2>Ryder Malone</h2>
                        </div>
                    </div>

                </div>
            </div>

            {/* Section */}

            {/* Footer */}

            <div className="footer-main">

                <div className="footer-part-1-1">
                    <div className="footer-part1-texts">
                        <h1 style={{
                            backgroundImage: `url(${h1carfoot})`,
                            backgroundRepeat: "no-repeat"
                        }}>Looking for a car?</h1>
                        <h2>+537 547-6401</h2>
                        <p>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in</p>
                        <button>Book now</button>
                    </div>
                    <img src={headercar} style={{ marginLeft: "-110px" }} />
                </div>


            </div>

            <footer>
                <img src={footerimg} alt="" />
            </footer>

            {/* Footer */}

        </div>
    )
}

export default About
