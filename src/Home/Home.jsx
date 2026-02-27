import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/carlogo.png"
import contactimg from "../assets/Icon+bg.png"
import headerbgimg from "../assets/Group 2.png"
import swithc from "../assets/selectarrow.png"
import headercar from "../assets/Imgs.png"
import sectionicon1 from "../assets/g3453.png"
import sectionicon2 from "../assets/g582.png"
import sectionicon3 from "../assets/g135.png"
import sectionmainimg from "../assets/img3.png"
import car from "../assets/amg.png"
import shopitemicons from "../assets/Icons+ text.png"
import meincaricon from "../assets/car71.png"
import mainloveicon from "../assets/love 1.png"
import maincelendar from "../assets/calendar11.png"
import mainclockicon from "../assets/speedometer 1.png"
import mainbgimg from "../assets/Img 66.png"
import carfoot from "../assets/Group 33.png"

const Home = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("https://69a11be22e82ee536fa037ba.mockapi.io/Cars")
            .then(res => res.json())
            .then(data => {
                setCars(data);
            })
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
                    <div className="header-box-texts" style={{
                        backgroundImage: `url(${headercar})`, backgroundRepeat: "no-repeat", backgroundPosition: "250px 40px"
                    }}>
                        <h1>Experience the road like never before</h1>
                        <p>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
                        <Link to="/vehicles" className='header-btn'>
                            <button>View all cars</button>
                        </Link>
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

                        {/* Date of rental */}

                        <input type="date" placeholder='Rental date' />

                        <input type="date" placeholder='Return date' />

                        {/* Date of rental */}

                        {/* Register btns */}

                        <button>Book now</button>

                        {/* Register btns */}

                    </div>
                </div>
            </header>

            {/* Header */}

            {/* Section */}

            <section>
                <div className="section-part-1">
                    <div className="section-part-1-items">
                        <div className="section-part-1-item">
                            <img src={sectionicon1} alt="" />
                            <h1>Availability</h1>
                            <p>Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis</p>
                        </div>
                        <div className="section-part-1-item">
                            <img src={sectionicon2} alt="" />
                            <h1>Comfort</h1>
                            <p>Gravida auctor fermentum morbi vulputate
                                ac egestas orcietium convallis</p>
                        </div>
                        <div className="section-part-1-item">
                            <img src={sectionicon3} alt="" />
                            <h1>Savings</h1>
                            <p>Pretium convallis id diam sed commodo vestibulum lobortis volutpat</p>
                        </div>
                    </div>
                </div>
                <div className="section-part-2">

                    <img src={sectionmainimg} alt="" />

                    <div className="section-part-2-texts">

                        <div className="section-part-2-text">
                            <h1>
                                <h2>1</h2>
                                <h4>Erat at semper </h4>
                            </h1>
                            <p>Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum</p>
                        </div>

                        <div className="section-part-2-text">
                            <h1>
                                <h2>2</h2>
                                <h4>Urna nec vivamus risus duis arcu </h4>
                            </h1>
                            <p>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
                        </div>

                        <div className="section-part-2-text">
                            <h1>
                                <h2>3</h2>
                                <h4>Lobortis euismod imperdiet tempus </h4>
                            </h1>
                            <p>Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi</p>
                        </div>

                        <div className="section-part-2-text">
                            <h1>
                                <h2>4</h2>
                                <h4>Cras nulla aliquet nam eleifend amet et</h4>
                            </h1>
                            <p>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* Section */}

            {/* Main */}

            <main>

                <div className="main-texts">
                    <h1>Choose the car that suits you</h1>
                    <Link to="/vehicles" style={{ textDecoration: "none", color: "black", display: "flex", gap: "10px" }}>
                        <p>View All</p>
                        <img style={{ width: "16px", height: "16px", marginTop: "98px", transform: "rotate(-90deg)" }} src={swithc} alt="" />
                    </Link>
                </div>

                <div className="main-shop">
                    {cars.slice(0, 6).map((item) => <div key={item.id} className='main-shop-item'>
                        <img src={car} style={{ width: "358px", height: "230px" }} />
                        <div className="main-shop-item-texts">
                            <h4>
                                <h1>{item.name}</h1>
                                <h3>{item.category}</h3>
                            </h4>
                            <h4>
                                <p>{item.price}</p>
                                <h3>per day</h3>
                            </h4>
                        </div>
                        <img style={{ marginTop: "40px" }} src={shopitemicons} />
                        <button>View Details</button>
                    </div>)}
                </div>

                <div className="main-part-2" style={{
                    backgroundImage: `url(${mainbgimg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "800px",
                    backgroundPosition: "300px 100px",
                }}>
                    <div className="main-part-2-texts-p" style={{ width: "640px", }}>
                        <h1 style={{ fontSize: "50px", fontWeight: "700" }}>Facts in numbers</h1>
                        <p style={{ fontSize: "16px", fontWeight: "400px", marginTop: "20px" }}>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum</p>
                    </div>
                    <div className="main-part-2-numbers" style={{
                    backgroundImage: `url(${carfoot})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "700px",
                    backgroundPosition: "-200px -200px",

                }}>
                        <div className="numbers-item">
                            <img src={meincaricon} />
                            <div className="number-item-texts">
                                <h1>540+</h1>
                                <p>Cars</p>
                            </div>
                        </div>
                        <div className="numbers-item">
                            <img src={mainloveicon} />
                            <div className="number-item-texts">
                                <h1>20k+</h1>
                                <p>Customers</p>
                            </div>
                        </div>
                        <div className="numbers-item">
                            <img src={maincelendar} />
                            <div className="number-item-texts">
                                <h1>25+</h1>
                                <p>Years</p>
                            </div>
                        </div>
                        <div className="numbers-item">
                            <img src={mainclockicon} />
                            <div className="number-item-texts">
                                <h1>20m+</h1>
                                <p>Miles</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-part-3">
                    <div className="main-part-3-texts">
                        <h1>Download mobile app</h1>
                    </div>
                </div>

            </main>

            {/* Main */}

        </div>
    )
}

export default Home 
