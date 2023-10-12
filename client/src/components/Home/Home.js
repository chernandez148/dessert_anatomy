import React from 'react'
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Category from './Category/Category';
import Yelp from './Yelp/Yelp';
import Testimonies from './Testimonies/Testimonies';
import Instagram from './Instagram/Instagram';
import Support from './Support/Support';

function Home() {
    return (
        <div className='Home'>
            <Hero />
            <Services />
            <Category />
            <Yelp />
            <Testimonies />
            <Instagram />
            <Support />
        </div>
    )
}

export default Home