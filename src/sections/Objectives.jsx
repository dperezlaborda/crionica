import React from 'react';
import CardObj from '../components/CardObj';
import '../style/sections/objectives.scss';

const Objectives = () =>{
    return(
        <section className="obj-container">
            <h2 className="obj-title">Objetivos</h2>
            <p className="obj-txt">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex.</p>
            <CardObj/>
        </section>
    )
}

export default Objectives;