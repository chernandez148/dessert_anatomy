import React from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import './styles.css'

function Testimonies() {
    return (
        <div className='Testimonies'>
            <p>Hear it from our customers</p>
            <h4>TESTIMONIALS</h4>
            <hr />
            <div className='testimonies-wrapper'>
                <button><BsFillArrowLeftCircleFill size={24} /></button>
                <h4>“I ordered this Caramel Crunch cake with Floral design for a special birthday.
                    Everyone enjoyed the cake! One of the BEST CAKES I've had in long time!!!”</h4>
                <button><BsFillArrowRightCircleFill size={24} /></button>
            </div>
            <hr />
            <h4>ANEEB J.</h4>
        </div>
    )
}

export default Testimonies