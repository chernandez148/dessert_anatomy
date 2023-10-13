import React from 'react'
import haloHalo from '../../../assets/halo-halo.png'
import flan from '../../../assets/flan.png'
import japaneseCheesecake from '../../../assets/japanese-cheesecake.png'
import brazoDeMercedes from '../../../assets/brazo-de-mercedes.png'
import maizConYelo from '../../../assets/maiz-con-yelo.png'
import bukoPandan from '../../../assets/buko-pandan.png'
import spanishBread from '../../../assets/spanish-bread.png'
import ubeSansRival from '../../../assets/ube-sansrival.png'
import ubeCupcake from '../../../assets/ube-cupcake.png'
import './styles.css'

function PopularItems() {

    const popularItems = [
        { image: haloHalo, title: "Halo-Halo", price: "$9.99" },
        { image: flan, title: "Leche Flan", price: "$8.99" },
        { image: japaneseCheesecake, title: "Japanese Cheesecake", price: "$8.99" },
        { image: brazoDeMercedes, title: "Braze De Mercedes Cupcake", price: "$4.89" },
        { image: maizConYelo, title: "Maiz Con Yelo", price: "$7.99" },
        { image: bukoPandan, title: "Buko Pandan", price: "$5.89" },
        { image: spanishBread, title: "Spanish Bread 3PC", price: "$7.99" },
        { image: ubeSansRival, title: "Ube Sans Rival", price: "$9.99" },
        { image: ubeCupcake, title: "Ube Cupcake", price: "$4.89" }
    ]

    return (
        <div className='PopularItems'>
            <h4>Popular Items</h4>
            <p>Try our most popular items.</p>
            <div className='popular-items-list'>
                {popularItems.map((item) => (
                    <div className='popular-item-card' key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <span>{item.price}</span>
                        <button>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularItems