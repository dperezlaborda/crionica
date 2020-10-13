import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '.././style/components/card.scss';
import { useState } from 'react';


const Card = () =>{

    const [answer, setAnswer] = useState(false);

    return(
        <div id="card-container">
            <h3 className="card-title">¿deleniti atque corrupti?
                <button onClick={ ()=> setAnswer(!answer)} className="icon">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </button>
            </h3>
            {answer && <p>bla bla bla</p>}
        </div>
        
    )
}

export default Card;