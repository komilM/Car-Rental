import React, { useEffect, useState } from 'react'
import "./Info.css"
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import logo from "../assets/carlogo.png"
import contactimg from "../assets/Icon+bg.png"
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
import main3img from "../assets/Group 12.png"
import footerimg from "../assets/Footer.png"
import sectionimgc from "../assets/Img788.png"
import infoitemimg1 from "../assets/gear-shift 1.png"
import infoitemimg2 from "../assets/Clip path group 11.png"
import infoitemimg3 from "../assets/g3353.png"
import infoitemimg4 from "../assets/Mask group45555.png"
import infoitemimg5 from "../assets/free-icon-distance-9709725 1.png"


const Info = () => {

    const { id } = useParams();
    const [mahsulot, setMahsulot] = useState(null);

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://69a11be22e82ee536fa037ba.mockapi.io/Cars")
            .then(res => res.json())
            .then(data => {
                setCars(data);
            })
    }, [])

    useEffect(() => {
        fetch(`https://69a11be22e82ee536fa037ba.mockapi.io/Cars/${id}`)
            .then(res => res.json())
            .then(data => setMahsulot(data))
            .catch(err => console.log("Xatolik yuz berdi:", err));
    }, [id]);

    if (!mahsulot) {
        return <h1 style={{ textAlign: "center", marginTop: "300px" }}>Loading...</h1>;
    }

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

            <div className="sectioninfo">
                <div className="section-info-main">
                    <h1 style={{ fontSize: "40px", fontWeight: "700" }}>{mahsulot.name}</h1>
                    <p style={{ fontSize: "40px", fontWeight: "600", color: "#5937E0", marginTop: "24px" }}>{mahsulot.price}</p>
                    <img src={car} />
                    <div className="section-info-imgs" style={{ marginTop: "50px" }}>
                        <img style={{ width: "140px", height: "100px", transition: "0.3s" }} src={sectionimgc} alt="" />
                        <img style={{ width: "140px", height: "100px", marginLeft: "24px", transition: "0.3s" }} src={sectionimgc} alt="" />
                        <img style={{ width: "140px", height: "100px", marginLeft: "24px", transition: "0.3s" }} src={sectionimgc} alt="" />
                    </div>
                </div>
                <div className="section-info-texts">
                    <h1>Technical Specification</h1>
                    <div className="section-info-texts-items">
                        <div className="section-info-item">
                            <img src={infoitemimg1} alt="" />
                            <h2>Gear Box</h2>
                            <p>Automat</p>
                        </div>
                        <div className="section-info-item">
                            <img src={infoitemimg2} alt="" />
                            <h2>Fuel</h2>
                            <p>Petrol</p>
                        </div>
                        <div className="section-info-item">
                            <img src={infoitemimg3} alt="" />
                            <h2>Doors</h2>
                            <p>2</p>
                        </div>
                        <div className="section-info-item">
                            <img src={infoitemimg1} alt="" />
                            <h2>Air Conditioner</h2>
                            <p>Yes</p>
                        </div><div className="section-info-item">
                            <img src={infoitemimg4} alt="" />
                            <h2>Seats</h2>
                            <p>5</p>
                        </div>
                        <div className="section-info-item">
                            <img src={infoitemimg5} alt="" />
                            <h2>Distance</h2>
                            <p>500</p>
                        </div>

                    </div>
                    <button>Rent a car</button>
                </div>
            </div>

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

                    {cars.slice(0, 6).map((p) => <div key={p.id} className='main-shop-item'>
                        <img src={car} style={{ width: "358px", height: "230px" }} />
                        <div className="main-shop-item-texts">

                            <h4>
                                <h1>{p.name}</h1>
                                <h3>{p.category}</h3>
                            </h4>
                            <h4>
                                <p>{p.price}</p>
                                <h3>per day</h3>
                            </h4>

                        </div>
                        <img style={{ marginTop: "40px" }} src={shopitemicons} />
                        <button onClick={() => navigate(`/info/${p.id}`)}>View Details</button>
                    </div>)}

                </div>

            </main>

            {/* Main */}

            {/* Footer */}

            <footer>
                <img src={footerimg} alt="" />
            </footer>

            {/* Footer */}

        </div>
    )
}

export default Info
