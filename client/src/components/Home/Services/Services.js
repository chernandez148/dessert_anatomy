import React from 'react'
import { Link } from 'react-router-dom';
import tratYourself from '../../../assets/services/treat-yourself.jpg'
import craftedWithHeartfeltCare from '../../../assets/services/crafted-with-heartfelt-care.png'
import weOfferSpecialOrders from '../../../assets/services/we-offer-special-orders.jpg'
import weCater from '../../../assets/services/we-cater.jpg'
import './styles.css'

function Services() {
    return (
        <div className='Services'>
            <div className='service-one'>
                <img src={tratYourself} alt='treat-yourself' />
                <div className='service-info'>
                    <h4>TREAT YOURSELF</h4>
                    <p>Indulge in the delightful world of
                        Filipino pastries, with a heavenly ube
                        treat that's a sweet slice of paradise!
                    </p>
                    <button><Link to="/menu">MENU</Link></button>
                </div>
            </div>
            <div className='service-two'>
                <img src={craftedWithHeartfeltCare} alt='crafted-with-heartfelt-care' />
                <div className='service-info'>
                    <h4>Crafter With Heartfelt Care</h4>
                    <p>Our creations are carefully crafted with a touch of genuine love and care.</p>
                    <button>ABOUT US</button>
                </div>
            </div>
            <div className='service-three'>
                <div className='service-info'>
                    <h4>WE OFFER SPECIAL ORDERS</h4>
                    <p>For special orders, we tailor every detail to your unique preferences, ensuring a personalized and unforgettable experience.</p>
                    <button>ORDER HERE</button>
                </div>
                <img src={weOfferSpecialOrders} alt='we-offer-special-orders' />
            </div>
            <div className='service-four'>
                <div className='service-info'>
                    <h4>WE CATER</h4>
                    <p>Elevate your event with our catering services, where we turn moments into unforgettable culinary experiences.</p>
                    <button>CALL NOW</button>
                </div>
                <img src={weCater} alt='we-cater' />
            </div>
        </div>
    )
}

export default Services