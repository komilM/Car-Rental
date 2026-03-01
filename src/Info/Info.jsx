import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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
        return <h1 style={{textAlign: "center", marginTop: "300px"}}>Loading...</h1>;
    }

    return (
        <div>
            <h1>{mahsulot.name}</h1>
            <p>{mahsulot.price}</p>
        </div>
    )
}

export default Info
