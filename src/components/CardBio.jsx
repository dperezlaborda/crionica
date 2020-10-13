import React from 'react';
import '../style/components/cardBio.scss';

const CardBio = (props) =>{
    return(
        <div className="bio-container">
            <img className="bio-image" src={props.img} alt="foto de biografia"/>
            <h2 className="bio-title">{props.name}</h2>
            <p className="bio-txt">{props.bio}</p>
        </div>
    )
}

export default CardBio;