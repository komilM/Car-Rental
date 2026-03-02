import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import logo from "../assets/carlogo.png"
import contactimg from "../assets/Icon+bg.png"

const Info = () => {

    const { id } = useParams();
    const [mahsulot, setMahsulot] = useState(null);

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

            <h1>{mahsulot.name}</h1>
            <p>{mahsulot.price}</p>
        </div>
    )
}

export default Info
