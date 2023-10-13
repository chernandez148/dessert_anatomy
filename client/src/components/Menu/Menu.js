import React from 'react'
import MenuHero from './MenuHero/MenuHero'
import PopularItems from './PopularItems/PopularItems'
import DessertItems from './DessertItems/DessertItems'
import FilipinoItems from './FilipinoItems/FilipinoItems'
import MilkTeaItems from './MilkTeaItems/MilkTeaItems'
import SpecialtyItems from './SpecialtyItems/SpecialtyItems'
import { Routes, Route } from 'react-router-dom';
import './styles.css'

function Menu() {
    return (
        <div className='Menu'>
            {/* <MenuHero /> */}
            <PopularItems />
            <DessertItems />
            <FilipinoItems />
            <MilkTeaItems />
            <SpecialtyItems />
            <Routes>
                <Route to="/dessert_anatomy/menu/popular_items" element={<PopularItems />} />
                <Route to="/dessert_anatomy/menu/dessert_items" element={<DessertItems />} />
                <Route to="/dessert_anatomy/menu/filipino_items" element={<FilipinoItems />} />
                <Route to="/dessert_anatomy/menu/milk_tea_items" element={<MilkTeaItems />} />
                <Route to="/dessert_anatomy/menu/specialty_items" element={<SpecialtyItems />} />
            </Routes>
        </div>
    )
}

export default Menu