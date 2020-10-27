import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/components/subMenu.scss';

const SubMenu = () =>{
    return(
        <ul className="sub-menu">
            <NavLink to="/objectives" exact activeClassName="selected" className="item">Objetivos</NavLink>
            <NavLink to="/achievments" exact activeClassName="selected" className="item">Logros</NavLink>
        </ul>
    )
}

export default SubMenu; 