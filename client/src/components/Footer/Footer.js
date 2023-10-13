import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

import './styles.css'

function Footer() {
    return (
        <div className='Footer'>
            <ul>
                <li><a href='#'>OUR STORY</a></li>
                <li><Link to="/dessert_anatomy/menu">MENU</Link></li>
                <li>
                    <Link
                        to="https://food.google.com/chooseprovider?restaurantId=/g/11t8323bv4&g2lbs=ANTchaO4zd5oAVam6uw-3hxqY2bhWqMWhazoU0K1jlALQO4slqs81BPIdYSF70Cm30IlPN-n96N7ou-0mF5z5jRuYSJCzxHg1diikaCaTqlamhXAQSrHUAdDkWypSvFZtnN1EOfto_qFKZNwweWrLtE8zbuSb4Ixzg%3D%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=SXEpZYbYM7e4kPIPkOmqqA4&ei=SXEpZYbYM7e4kPIPkOmqqA4&fo_s=OA&opi=89978449&sei=CUCctSDf-EKPETYTpAKypTuZ&utm_campaign&utm_source=search"
                        className=''>
                        ORDER
                    </Link>
                </li>
                <li><a className='contact' href='#'>CONTACT</a></li>
            </ul>
            <p>All Rights Reserved © Christian Hernandez 2023 </p>
            <Link to="/dessert_anatomy"><img src={logo} alt='logo' width="125px" /></Link>
        </div>
    )
}

export default Footer