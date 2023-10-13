import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

import './styles.css'

function Footer() {
    return (
        <div className='Footer'>
            <ul>
                <li><a href='#'>OUR STORY</a></li>
                <li><a href='#'>MENU</a></li>
                <li><a href='#'>ORDER</a></li>
                <li><a className='contact' href='#'>CONTACT</a></li>
            </ul>
            <p>All Rights Reserved © Christian Hernandez 2023 </p>
            <Link to="/"><img src={logo} alt='logo' width="125px" /></Link>
        </div>
    )
}

export default Footer