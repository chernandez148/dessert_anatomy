import React from 'react'
import thaiTea from '../../../assets/menu/thai-tea.png'
import greenThaiTea from '../../../assets/menu/green-thai-tea.png'
import tigerMilkTea from '../../../assets/menu/tiger-milk-tea.png'
import taroMilkTea from '../../../assets/menu/taro-milk-tea.png'
import './styles.css'

function MilkTeaItems() {

    const milkTeaItems = [
        { image: thaiTea, title: "Thai Tea", price: "$5.69" },
        { image: greenThaiTea, title: "Green Thai Tea", price: "$5.69" },
        { image: tigerMilkTea, title: "Tiger Milk Tea", price: "$5.69" },
        { image: taroMilkTea, title: "Taro Milk Tea", price: "$5.69" },

    ]

    return (
        <div className='MilkTeaItems'>
            <h4>Milk Tea Items</h4>
            <p>Our MilkTea Deserts.</p>
            <div className='milk-tea-items-list'>
                {milkTeaItems.map((item) => (
                    <div className='milk-tea-item-card' key={item.id}>
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

export default MilkTeaItems