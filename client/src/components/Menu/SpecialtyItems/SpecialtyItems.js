import React from 'react'
import haloHalo from '../../../assets/menu/halo-halo.png'
import maizConYelo from '../../../assets/menu/maiz-con-yelo.png'
import './styles.css'

function SpecialtyItems() {

    const specialtyItems = [
        { image: haloHalo, title: "Halo-Halo", price: "$9.99" },
        { image: maizConYelo, title: "Maiz Con Yelo", price: "$7.99" },
    ]

    return (
        <div className='SpecialtyItems category' id='SpecialtyItems'>
            <h4>Specialty Drink Items</h4>
            <p>Our Specialty Drinks.</p>
            <div className='specialty-items-list'>
                {specialtyItems.map((item) => (
                    <div className='specialty-item-card' key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <span>{item.price}</span>
                        <button>More Info</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpecialtyItems