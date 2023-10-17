import React from 'react'
import heart from '../../../assets/categories/heart.png'
import badge from '../../../assets/categories/badge.png'
import flower from '../../../assets/categories/flower.png'
import circle from '../../../assets/categories/circle.png'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function Category() {
    const navigate = useNavigate()

    const redirectToCategory = (categoryId) => {
        navigate(`/dessert_anatomy/menu?category=${categoryId}`)
    };

    return (
        <div className='Category'>
            <p>Explore, Savor, Delight, Repeat</p>
            <h4>SHOP BY CATEGORY</h4>
            <hr />
            <div className='category-wrapper'>
                <div className='category-one'>
                    <div onClick={() => redirectToCategory("DessertItems")} ><img src={heart} /></div>
                    <h4>1. DESSERTS</h4>
                    <p>Sweet Temptations, Indulge Today</p>
                </div>
                <div className='category-two'>
                    <div onClick={() => redirectToCategory("SpecialtyItems")}><img src={badge} /></div>
                    <h4>2. SPECIALTY DRINKS</h4>
                    <p>Sweet Temptations, Indulge Today</p>
                </div>
                <div className='category-three'>
                    <div onClick={() => redirectToCategory("MilkTeaItems")}><img src={flower} /></div>
                    <h4>3. MILK TEAS</h4>
                    <p>Enjoy Our Milk Teas</p>
                </div>
                <div className='category-four'>
                    <div onClick={() => redirectToCategory("FilipinoItems")}><img src={circle} /></div>
                    <h4>4. FILIPINO DESSERTS</h4>
                    <p>Try Our Unique Pastries</p>
                </div>
            </div>
        </div>
    )
}

export default Category