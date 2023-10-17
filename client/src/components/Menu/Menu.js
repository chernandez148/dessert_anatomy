import React, { useEffect } from 'react'
import MenuHero from './MenuHero/MenuHero'
import PopularItems from './PopularItems/PopularItems'
import DessertItems from './DessertItems/DessertItems'
import FilipinoItems from './FilipinoItems/FilipinoItems'
import MilkTeaItems from './MilkTeaItems/MilkTeaItems'
import SpecialtyItems from './SpecialtyItems/SpecialtyItems'
import { useLocation } from 'react-router-dom'
import './styles.css'

function Menu() {
    const location = useLocation();
    const categoryId = new URLSearchParams(location.search).get('category');

    console.log(categoryId)

    useEffect(() => {
        // Scroll to the category section with the matching category ID
        if (categoryId) {
            const categoryElement = document.getElementById(categoryId);
            if (categoryElement) {
                window.scrollTo({
                    top: categoryElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }, [categoryId]);
    return (
        <div className='Menu'>
            {/* <MenuHero /> */}
            <PopularItems />
            <DessertItems />
            <FilipinoItems />
            <MilkTeaItems />
            <SpecialtyItems />
        </div>
    )
}

export default Menu