import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/components/subMenu.scss';

const SubMenu = () =>{
    return(
        <ul className="sub-menu">
            <NavLink to="/news" exact activeClassName="selected" className="item">Noticias</NavLink>
            <NavLink to="/achievments" exact activeClassName="selected" className="item">Logros</NavLink>
        </ul>
    )
}

export default SubMenu; 