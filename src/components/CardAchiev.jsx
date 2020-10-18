import React from 'react';
import '../style/components/cardAchiev.scss';


const CardAchiev = ( props ) => {
    return(
        <div className="container-cardAch">
            <div className="ach-image" style={{
                backgroundImage: `url(${props.img})`
            }}>
                <date className="date">{props.date}</date>
            </div>
            <div className="ach-txt">
                <h2 className="ach-tit-card">{props.titAch}</h2>
                <p>{props.txtAch}</p>
            </div>
        </div>
    )
}

export default CardAchiev;