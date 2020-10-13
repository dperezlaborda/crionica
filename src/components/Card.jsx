import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '.././style/components/card.scss';


const Card = (props) =>{

    const [answer, setAnswer] = useState(false);

    return(
        <div id="card-container">
            <h3 className="card-title">{props.ques}
                <button onClick={ ()=> setAnswer(!answer)} className="icon">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </button>
            </h3>
            {answer && <p className="card-text">{props.ans}</p>}
        </div>
        
    )
}

export default Card;