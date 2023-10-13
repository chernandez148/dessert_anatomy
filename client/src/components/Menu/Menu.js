import React from 'react'
import MenuHero from './MenuHero/MenuHero'
import PopularItems from './PopularItems/PopularItems'
import DessertItems from './DessertItems/DessertItems'
import FilipinoItems from './FilipinoItems/FilipinoItems'
import MilkTeaItems from './MilkTeaItems/MilkTeaItems'
import SpecialtyItems from './SpecialtyItems/SpecialtyItems'

function Menu() {
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