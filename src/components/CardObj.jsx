import React from 'react';
import '../style/components/cardObj.scss';

const CardObj = () =>{
    return(
        <div className="card-obj">
            <h3 className="card-obj-title">Mauris vel neque</h3>
            <div className="logo-obj"></div>
            <p className="card-obj-txt">Etiam pellentesque dolor sed suscipit molestie. Praesent scelerisque aliquet nulla at venenatis. Utae imperdiet risus fermentum a.</p>
            <span className="bar"></span>
            <button className="bttn-obj">Leer Más</button>
        </div>
    )
}

export default CardObj;