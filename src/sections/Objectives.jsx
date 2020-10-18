import { faBrain, faDna, faFlask } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CardObj from '../components/CardObj';
import '../style/sections/objectives.scss';

const Objectives = () =>{

    const cardsObj = [
        {
            title: "Mauris vel neque",
            icon: <FontAwesomeIcon icon={faBrain}/>,
            text: "Etiam pellentesque dolor sed suscipit molestie. Praesent scelerisque aliquet nulla at venenatis. Utae imperdiet risus fermentum a."
        },
        {
            title:"Sed faucibus pellentesque",
            icon: <FontAwesomeIcon icon={faDna}/>,
            text: "Etiam pellentesque dolor sed suscipit molestie. Praesent scelerisque aliquet nulla at venenatis. Utae imperdiet risus fermentum a."
        },
        {
            title:"Ut iaculis nisi.",
            icon: <FontAwesomeIcon icon={faFlask} />,
            text:"Etiam pellentesque dolor sed suscipit molestie. Praesent scelerisque aliquet nulla at venenatis. Utae imperdiet risus fermentum a."
        }
    ]

    return(
        <section className="obj-container">
            <h2 className="obj-title">Objetivos</h2>
            <p className="obj-txt">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex.</p>
            {cardsObj.map ( (c, ic) => {
                return(
                    <CardObj key={ic} title={c.title} icon={c.icon} text={c.text}/>
                )
            })}
        </section>
    )
}

export default Objectives;