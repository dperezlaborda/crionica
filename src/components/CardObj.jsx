import React from 'react';
import '../style/components/cardObj.scss';

const CardObj = ( props ) =>{
    return(
        <div className="card-obj">
            <h3 className="card-obj-title">{props.title}</h3>
            <div className="card-obj-i">{props.icon}</div>
            <p className="card-obj-txt">{props.text}</p>
            <span className="bar"></span>
            <button className="bttn-obj">Leer Más</button>
        </div>
    )
}

export default CardObj;