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
                    <Link to="/dessert_anatomy">DESSERT ANATOMY</Link>
                </div>
                <div className="nav-right">
                    <Link
                        to="https://food.google.com/chooseprovider?restaurantId=/g/11t8323bv4&g2lbs=ANTchaO4zd5oAVam6uw-3hxqY2bhWqMWhazoU0K1jlALQO4slqs81BPIdYSF70Cm30IlPN-n96N7ou-0mF5z5jRuYSJCzxHg1diikaCaTqlamhXAQSrHUAdDkWypSvFZtnN1EOfto_qFKZNwweWrLtE8zbuSb4Ixzg%3D%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=SXEpZYbYM7e4kPIPkOmqqA4&ei=SXEpZYbYM7e4kPIPkOmqqA4&fo_s=OA&opi=89978449&sei=CUCctSDf-EKPETYTpAKypTuZ&utm_campaign&utm_source=search"
                        className=''>
                        ORDER
                    </Link>
                    <a className='' href='#'>CONTACT</a>
                </div>
            </nav>
            <nav className='mobile-nav'>
                <button className="" onClick={handleToggleMenu}>{toggleMenu ? <IoClose size={24} /> : <CgMenuRightAlt size={24} />}</button>
                <div className={`menu-content ${toggleMenu ? "top-0" : "top-minus-1000"}`}>
                    <Link to="/dessert_anatomy" onClick={handleCloseMenu}><img src={logo} className='logo' alt='logo' width="100px" /></Link>
                    <div className='nav-links'>
                        <a onClick={handleCloseMenu} className='' href='#'>OUR STORY</a>
                        <Link to="/dessert_anatomy/menu" onClick={handleCloseMenu}>MENU</Link>
                        <Link
                            to="https://food.google.com/chooseprovider?restaurantId=/g/11t8323bv4&g2lbs=ANTchaO4zd5oAVam6uw-3hxqY2bhWqMWhazoU0K1jlALQO4slqs81BPIdYSF70Cm30IlPN-n96N7ou-0mF5z5jRuYSJCzxHg1diikaCaTqlamhXAQSrHUAdDkWypSvFZtnN1EOfto_qFKZNwweWrLtE8zbuSb4Ixzg%3D%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=SXEpZYbYM7e4kPIPkOmqqA4&ei=SXEpZYbYM7e4kPIPkOmqqA4&fo_s=OA&opi=89978449&sei=CUCctSDf-EKPETYTpAKypTuZ&utm_campaign&utm_source=search"
                            className=''>
                            ORDER
                        </Link>
                        <a onClick={handleCloseMenu} className='' href='#'>CONTACT</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
