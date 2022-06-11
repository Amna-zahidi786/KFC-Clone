import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png'
import './Header.css';


function Header() {
    return (
        <div className='header-wrapper'>
            <div className="mian-logo">
             <a href=""> <img src={logo} alt=""/></a>
            </div>
            <div className="menu-link">
                <ul>
                <li><i class="bi bi-layer-backward"></i>   <Link to="/">Back to home</Link></li>
                    <li><i class="bi bi-people-fill"/>   <Link to="/Login">Sign in</Link></li>
                    <li><Link to="/Api">API</Link></li>
                </ul>
            </div>
        </div>
    );

}
export default Header