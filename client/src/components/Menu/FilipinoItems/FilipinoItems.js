import React from 'react'
import lecheFlan from '../../../assets/menu/flan.png'
import sapinSapin from '../../../assets/menu/sapin-sapin.png'
import './styles.css'

function FilipinoItems() {

    const filipinoItems = [
        { image: lecheFlan, title: "Leche Flan", price: "$8.99" },
        { image: sapinSapin, title: "Sapin-Sapin", price: "$8.99" },
    ]

    return (
        <div className='FilipinoItems category' id='FilipinoItems'>
            <h4>Filipino Items</h4>
            <p>Our Filipino Deserts.</p>
            <div className='filipino-items-list'>
                {filipinoItems.map((item) => (
                    <div className='filipino-item-card' key={item.id}>
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

export default FilipinoItems