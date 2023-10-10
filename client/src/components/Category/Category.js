import React from 'react'
import heart from '../../assets/heart.png'
import badge from '../../assets/badge.png'
import flower from '../../assets/flower.png'
import circle from '../../assets/circle.png'
import './styles.css'

function Category() {
    return (
        <div className='Category'>
            <p>Explore, Savor, Delight, Repeat</p>
            <h4>SHOP BY CATEGORY</h4>
            <hr />
            <div className='category-wrapper'>
                <div className='category-one'>
                    <img src={heart} />
                    <h4>1. DESSERTS</h4>
                    <p>Sweet Temptations, Indulge Today</p>
                </div>
                <div className='category-two'>
                    <img src={badge} />
                    <h4>2. SPECIALTY DRINKS</h4>
                    <p>Sweet Temptations, Indulge Today</p>
                </div>
                <div className='category-three'>
                    <img src={flower} />
                    <h4>3. MILK TEAS</h4>
                    <p>Enjoy Our Milk Teas</p>
                </div>
                <div className='category-four'>
                    <img src={circle} />
                    <h4>4. FILIPINO DESSERTS</h4>
                    <p>Try Our Unique Pastries</p>
                </div>
            </div>
        </div>
    )
}

export default Category