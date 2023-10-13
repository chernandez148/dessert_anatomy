import React from 'react'
import image1 from '../../../assets/instagram/insta-1.png'
import image2 from '../../../assets/instagram/insta-2.png'
import image3 from '../../../assets/instagram/insta-3.png'
import image4 from '../../../assets/instagram/insta-4.png'
import image5 from '../../../assets/instagram/insta-5.png'
import image6 from '../../../assets/instagram/insta-6.jpg'
import './styles.css'

function Instagram() {
    return (
        <div className='Instagram'>
            <p>#FOLLOW ON INSTAGRAM </p>
            <h4>FOLLOW US</h4>
            <hr />
            <div className='instagram-wrapper'>
                <img src={image1} alt='image-1' />
                <img src={image2} alt='image-2' />
                <img src={image3} alt='image-3' />
                <img src={image4} alt='image-4' />
                <img src={image5} alt='image-5' />
                <img src={image6} alt='image-6' />
            </div>
            <button>ORDER NOW</button>
        </div>
    )
}

export default Instagram