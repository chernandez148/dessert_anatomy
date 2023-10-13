import React, { useEffect, useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import './styles.css'

function Testimonies() {
    const [index, setIndex] = useState(0)

    const testimonials = [
        { review: "“I ordered this Caramel Crunch cake with Floral design for a special birthday. Everyone enjoyed the cake! One of the BEST CAKES I've had in long time!!!”", author: "ANEEB J." },
        { review: "“Soo happy to have come across this place. The service is exceptional & the mini cakes we ordered was delicious, didn't get to try it till 3 days after, can't imagine how good it wood of been the day of. Thank you for being so accommodating & understanding. Will be ordering from you guys again.”", author: "Aileen P." },
        { review: "“Desserts are good! A lot great selection! Great service. Place is best for hanging out with friends. Ambiance is perfect! Would definitely recommend to my friends!”", author: "Slima D." }
    ]

    const handleIndexDecrement = () => {
        setIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : 2);
    };

    const handleIndexIncrement = () => {
        setIndex(prevIndex => prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0);
    };

    return (
        <div className='Testimonies'>
            <p>Hear it from our customers</p>
            <h4>TESTIMONIALS</h4>
            <hr />
            <div className='testimonies-wrapper'>
                <button onClick={handleIndexDecrement}><BsFillArrowLeftCircleFill size={24} /></button>
                <div className='inner-testimonies-wrapper'>
                    <h4>{testimonials[index].review}</h4>
                    <hr />
                    <h4 className='author'>{testimonials[index].author}</h4>
                </div>
                <button onClick={handleIndexIncrement}><BsFillArrowRightCircleFill size={24} /></button>
            </div>

        </div>
    )
}

export default Testimonies