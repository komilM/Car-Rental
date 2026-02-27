import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Info = () => {

    const { id } = useParams();
    const [mahsulot, setMahsulot] = useState(null);

    useEffect(() => {
        // API oxiriga /${id} qo'shish kerak, shunda faqat bitta mashina keladi
        fetch(`https://69a11be22e82ee536fa037ba.mockapi.io/Cars/${id}`)
            .then(res => res.json())
            .then(data => setMahsulot(data))
            .catch(err => console.log("Xatolik yuz berdi:", err));
    }, [id]);

    // Ma'lumot hali kelmagan bo'lsa, "Loading" ko'rsatib turish shart
    if (!mahsulot) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            {/* Endi bu yerda xato bermaydi, chunki yuqorida 'if' bilan tekshirdik */}
            <h1>{mahsulot.name}</h1>
            <p>{mahsulot.price}</p>
        </div>
    )
}

export default Info
