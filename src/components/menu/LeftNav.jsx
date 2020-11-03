import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import styled from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
import { NavLink } from "react-router-dom";
import { scroller } from 'react-scroll';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin:0;
  box-sizing:border-box;
  .item {
    padding: 18px 10px;
    text-decoration:none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #152126;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    .item {
      color: #EBEFF2;
      cursor:pointer;
      &:hover{
        color: #909CA6;
      }
    }
  }
  button{
    margin-left:10px;
    background:none;
    border:none;
    cursor:pointer;
    outline: inherit;
    svg{
      color:#fff;
      padding:3px;
      border-radius:50%;
      background-color:none;
      &:hover{
         background-color:#909CA6;
      }
    }
  }
  .selected{
    color:#4C6873;
  }
`;

const LeftNav = ({ open }) =>{

  const [dropdown, setDropdown] = useState(false);

  const scrollType = {
    duration:300,
    delay:500,
    smooth:true
  }

  const scrollToIntro = () =>{
    scroller.scrollTo("scroll-to-intro", scrollType)
  }

  const scrollToAbout = () =>{
    scroller.scrollTo("scroll-to-about", scrollType);
  }

  const scrollToObj = () =>{
    scroller.scrollTo("scroll-to-obj", scrollType);
  }

  const scrollToContact = () =>{
    scroller.scrollTo("scroll-to-contact", scrollType);
  }


    return(
        <Ul className="list-menu" open={open}> 
            <NavLink to="/intro" exact activeClassName="selected" className="item" onClick={() => scrollToIntro()}>¿Qué es la Criónica?
              <button onClick={ () => setDropdown(!dropdown) }>
                <FontAwesomeIcon icon={faChevronDown}/>
              </button>
              {dropdown && <SubMenu/>}
            </NavLink>
            <NavLink to="/about" exact activeClassName="selected" className="item" onClick={()=>scrollToAbout()}>Quienes Somos</NavLink>
            <NavLink to="/news" exact activeClassName="selected" className="item" onClick={()=> scrollToObj()}>Objetivos</NavLink>
            <NavLink to="/contact" exact activeClassName="selected" className="item" onClick={() =>scrollToContact()}>Contacto</NavLink>
        </Ul>
    )
}

export default LeftNav;