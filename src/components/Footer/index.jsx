import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/img/footerlogo.png'
import appstore from '../../assets/img/appstore.png'
import googleplay from '../../assets/img/googleplay.png'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <img className='footer-logo'src={footerlogo} alt=""/>
            <div className="row footer-inner">
                <div className="col-md-2">
                    <ul>
                        <li><a href="">Informatio </a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Mitao bhook</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Career</a></li>
                    </ul>

                </div>
                <div className="col-md-2">
                    <ul>
                        <li><a href="">Food</a></li>
                        <li><a href="">Our scret recipe</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li><a href="">Locatio</a></li>
                        <li><a href="">Finf a store</a></li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <ul>
                        <li><a href="">Get in touch</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Join Us</a></li>
                       
                    </ul>
                </div>
                <div className="col-md-4">
                <ul className='store-img-wrapper'>
                        <li><a href=""><img src={appstore}></img></a></li>
                        <li><a href=""><img src={googleplay}></img></a></li>
                        
                    </ul>
                </div>
                <div className="copy-wrire-wrapper">
                    <li>© 2022 KFC Pakistan. All rights reserved.</li>
                </div>
            </div>
        </div>
    )
}

export default Footer