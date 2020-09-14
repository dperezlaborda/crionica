import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin:0;
  .item {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    .item {
      color: #fff;
      cursor:pointer;
      &:hover{
        color:grey;
      }
    }
  }
`;

const LeftNav = ({ open }) =>{
    return(
        <Ul className="list-menu" open={open}>    
            <li className="item">Acerca de nosotros</li>
            <li className="item">Nuestra misión</li>
            <li className="item">¿Qué es la Criónica?</li>
            <li className="item">Contacto</li>
        </Ul>
    )
}

export default LeftNav;