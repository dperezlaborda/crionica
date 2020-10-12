import React from 'react';
import "../../style/components/navbar.scss";
import Hamburger from './Hamburger.jsx';

const Navbar = () =>{
    return(
        <nav className="nav-menu">
            <Hamburger />
        </nav>
    )
}

export default Navbar;