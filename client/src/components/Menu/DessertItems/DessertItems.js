import React from 'react'
import ubeCheesecake from '../../../assets/menu/ube-cheesecake.png'
import japaneseCheesecake from '../../../assets/menu/japanese-cheesecake.png'
import brazoDeMercedes from '../../../assets/menu/brazo-de-mercedes.png'
import bukoPandan from '../../../assets/menu/buko-pandan.png'
import spanishBread from '../../../assets/menu/spanish-bread.png'
import ubeSansRival from '../../../assets/menu/ube-sansrival.png'
import ubeCupcake from '../../../assets/menu/ube-cupcake.png'
import artisanCheeseEnsaymada from '../../../assets/menu/artisan-cheese-ensaymada.png'
import ubeCheesePandesal from '../../../assets/menu/use-cheese-pandesal.png'
import rockyRoadCupcake from '../../../assets/menu/rocky-road-cupcake.png'
import ubeIceCream from '../../../assets/menu/ube-ice-cream.png'
import bananaCreamCheeseUbeMuffin from '../../../assets/menu/banana-cream-cheese-ube-muffin.png'
import './styles.css'

function DessertItems() {

    const dessertItems = [
        { image: ubeCheesecake, title: "Ube Cheesecake", price: "$4.59" },
        { image: japaneseCheesecake, title: "Japanese Cheesecake", price: "$8.99" },
        { image: artisanCheeseEnsaymada, title: "Artisan Cheese Ensaymada", price: "$8.99" },
        { image: brazoDeMercedes, title: "Braze De Mercedes Cupcake", price: "$4.89" },
        { image: bukoPandan, title: "Buko Pandan", price: "$5.89" },
        { image: spanishBread, title: "Spanish Bread 3PC", price: "$7.99" },
        { image: ubeSansRival, title: "Ube Sans Rival", price: "$9.99" },
        { image: ubeCupcake, title: "Ube Cupcake", price: "$4.89" },
        { image: rockyRoadCupcake, title: "Rocky Road Cupcake", price: "$4.89" },
        { image: bananaCreamCheeseUbeMuffin, title: "Banana Cream Cheese Ube Muffin", price: "$4.89" },
        { image: ubeCheesePandesal, title: "Ube Cheese Pandesal", price: "$2.99" },
        { image: ubeIceCream, title: "Homemade Ube Ice Cream", price: "$5.49" },
    ]

    return (
        <div className='DessertItems'>
            <h4>Dessert Items</h4>
            <p>Try our sweet desserts.</p>
            <div className='dessert-items-list'>
                {dessertItems.map((item) => (
                    <div className='dessert-item-card' key={item.id}>
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

export default DessertItems