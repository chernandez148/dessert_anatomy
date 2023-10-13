import React, { useState } from 'react'
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
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
                    <Link to="/about">OUR STORY</Link>
                    <Link to="/dessert_anatomy/menu">MENU</Link>
                </div>
                <div className="nav-center">
                    <Link to="/">DESSERT ANATOMY</Link>
                </div>
                <div className="nav-right">
                    <a className='' href='#'>ORDER</a>
                    <a className='' href='#'>CONTACT</a>
                </div>
            </nav>
            <nav className='mobile-nav'>
                <button className="" onClick={handleToggleMenu}>{toggleMenu ? <IoClose size={24} /> : <CgMenuRightAlt size={24} />}</button>
                <div className={`menu-content ${toggleMenu ? "top-0" : "top-minus-1000"}`}>
                    <img src={logo} className='logo' alt='logo' width="100px" />
                    <div className='nav-links'>
                        <a onClick={handleCloseMenu} className='' href='#'>OUR STORY</a>
                        <Link to="/dessert_anatomy/menu" onClick={handleCloseMenu}>MENU</Link>
                        <a onClick={handleCloseMenu} className='' href='#'>ORDER</a>
                        <a onClick={handleCloseMenu} className='' href='#'>CONTACT</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
