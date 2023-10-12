import React from 'react'
import { BiLogoInstagramAlt, BiLogoYelp, BiLogoFacebookCircle, BiLogoGoogle } from 'react-icons/bi';
import './styles.css'

function Support() {
    return (
        <div className='Support'>
            <h4>FOR SUPPORT CONTACT US AT (909) 894-3294</h4>
            <div className='support-wrapper'>
                <h4>FOLLOW US AT</h4>
                <ul>
                    <li><BiLogoInstagramAlt /></li>
                    <li><BiLogoYelp /></li>
                    <li><BiLogoFacebookCircle /></li>
                    <li><BiLogoGoogle /></li>
                </ul>
            </div>
        </div>
    )
}

export default Support