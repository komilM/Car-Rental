import React, { useEffect, useState } from 'react'
import "./Vehicles.css"
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../assets/carlogo.png"
import contactimg from "../assets/Icon+bg.png"
import car from "../assets/amg.png"
import shopitemicons from "../assets/Icons+ text.png"

// 👇 Groups ro'yxati - API dagi category nomlari bilan mos bo'lishi kerak
const groups = [
    { label: "All vehicles", value: "all" },
    { label: "Sedan", value: "Sedan" },
    { label: "Suv", value: "Suv" },
    { label: "Sport", value: "Sport" },
    { label: "Supercar", value: "Supercar" }
]

const Vehicles = () => {
    const [cars, setCars] = useState([]);
    const [activeGroup, setActiveGroup] = useState("all"); // 👈 QO'SHILDI
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://69a11be22e82ee536fa037ba.mockapi.io/Cars")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    // 👇 Filter - activeGroup "all" bo'lsa hammasi, bo'lmasa category bo'yicha
    const filtered = activeGroup === "all"
        ? cars
        : cars.filter(car => car.category === activeGroup)

    if (!cars.length) return <h1>Loading...</h1>;

    return (
        <div>
            <nav>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>Car Rental</p>
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

            <main>
                <h6>Select a vehicle group</h6>



                <div className="main-shop">
                    <div className="shop-btns">
                        {groups.map(group => (
                            <button style={{ width: "148px", height: "50px", borderRadius: "20px" }}
                                key={group.value}
                                onClick={() => setActiveGroup(group.value)}
                                className={activeGroup === group.value ? "active" : ""}
                            >
                                {group.label}
                            </button>
                        ))}
                    </div>
                    <div className="shop-items">
                        {filtered.map((p) => (
                            <div key={p.id} className='main-shop-item'>
                                <img
                                    src={car}
                                    style={{ width: "358px", height: "230px", objectFit: "cover" }}
                                />
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
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Vehicles