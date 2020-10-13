import React from 'react';
import Card from '../components/Card';
import '../style/sections/intro.scss'

const Intro = () =>{
    return(
        <section id="intro-container">
            <h2 className="intro-title">¿Qué es la criónica?</h2>
            <p className="intro-text sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus sem sed dui ultricies venenatis.</p>
            <p className="intro-text">Proin gravida, enim a dignissim viverra, dolor tellus elementum lectus, id consectetur magna massa ac orci. Quisque feugiat, mi id rutrum porta, mauris nisl mollis velit, et commodo dolor massa nec sem. Donec fermentum a lectus interdum tincidunt. Nunc lorem lectus, accumsan eget congue a, aliquam id mauris. Sed dignissim eget ante eu pellentesque. Vestibulum in velit ex.</p>
            <h2>Preguntas Frecuentes</h2>
            <Card/>
        </section>
    )
}

export default Intro; 