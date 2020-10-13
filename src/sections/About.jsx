import React from 'react';
import Slider from '../components/Slider';
import '../style/sections/about.scss';

const About = () =>{
    return(
        <section className="about-container">
            <h2 className="about-title">Quienes somos</h2>
            <h3 className="about-sub">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex.</h3>
            <Slider/>
        </section>
    )
}

export default About;