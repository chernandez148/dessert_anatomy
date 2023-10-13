import React from 'react'
import MenuHero from './MenuHero/MenuHero'
import PopularItems from './PopularItems/PopularItems'
import DessertItems from './DessertItems/DessertItems'

function Menu() {
    return (
        <div className='Menu'>
            {/* <MenuHero /> */}
            <PopularItems />
            <DessertItems />
        </div>
    )
}

export default Menu