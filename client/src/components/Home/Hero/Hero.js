import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

function Hero() {
    return (
        <div className='Hero'>
            <div className='hero-wrapper'>
                <h1>Ube Butter Cake</h1>
                <h3>OUR BEST SELLER</h3>
                <p>Moist ube butter cake topped with Ube French
                    buttercream and sprinkled with almond praline</p>
                <button><Link to="https://food.google.com/chooseprovider?restaurantId=/g/11t8323bv4&g2lbs=ANTchaO4zd5oAVam6uw-3hxqY2bhWqMWhazoU0K1jlALQO4slqs81BPIdYSF70Cm30IlPN-n96N7ou-0mF5z5jRuYSJCzxHg1diikaCaTqlamhXAQSrHUAdDkWypSvFZtnN1EOfto_qFKZNwweWrLtE8zbuSb4Ixzg%3D%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=SXEpZYbYM7e4kPIPkOmqqA4&ei=SXEpZYbYM7e4kPIPkOmqqA4&fo_s=OA&opi=89978449&sei=CUCctSDf-EKPETYTpAKypTuZ&utm_campaign&utm_source=search" >ORDER NOW</Link></button>
            </div>
        </div>
    )
}

export default Hero