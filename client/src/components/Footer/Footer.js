import React from 'react'
import logo from '../../assets/logo.png'
import './styles.css'

function Footer() {
    return (
        <div className='Footer'>
            <ul>
                <li><a href='#'>OUR STORY</a></li>
                <li><a href='#'>MENU</a></li>
                <li><a href='#'>ORDER</a></li>
                <li><a className='contact' href='#'>ONTACT</a></li>
            </ul>
            <p>All Rights Reserved © Christian Hernandez 2023 </p>
            <img src={logo} width="125px" />
        </div>
    )
}

export default Footer