import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import styled from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin:0;
  box-sizing:border-box;
  .item {
    padding: 18px 10px;
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
`;

const LeftNav = ({ open }) =>{

  const [dropdown, setDropdown] = useState(false);

    return(
        <Ul className="list-menu" open={open}>    
            <li className="item">¿Qué es la Criónica?
              <button onClick={ () => setDropdown(!dropdown) }>
                <FontAwesomeIcon icon={faChevronDown}/>
              </button>
              {dropdown && <SubMenu/>}
            </li>
            <li className="item">Quienes Somos</li>
            <li className="item">Noticias</li>
            <li className="item">Contacto</li>
        </Ul>
    )
}

export default LeftNav;