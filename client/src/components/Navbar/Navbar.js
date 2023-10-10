import React, { useState } from 'react'
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import './styles.css'

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    const handleCloseMenu = () => {
        setToggleMenu(false)
    }

    return (
        <div className='Navbar'>
            <nav className='desktop-nav'>
                <div className="nav-left">
                    <a className='' href='#'>OUR STORY</a>
                    <a className='' href='#'>MENU</a>
                </div>
                <div className="nav-center">
                    <h3>DESSERT ANATOMY</h3>
                </div>
                <div className="nav-right">
                    <a className='' href='#'>ORDER</a>
                    <a className='' href='#'>CONTACT</a>
                </div>
            </nav>
            <nav className='mobile-nav'>
                <button className="" onClick={handleToggleMenu}>{toggleMenu ? <IoClose size={24} /> : <CgMenuRightAlt size={24} />}</button>
                <div className={`menu-content ${toggleMenu ? "top-0" : "top-minus-1000"}`}>
                    <img className='logo' alt='logo' />
                    <div className='nav-links'>
                        <a onClick={handleCloseMenu} className='' href='#'>OUR STORY</a>
                        <a onClick={handleCloseMenu} className='' href='#'>MENU</a>
                        <a onClick={handleCloseMenu} className='' href='#'>ORDER</a>
                        <a onClick={handleCloseMenu} className='' href='#'>CONTACT</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
