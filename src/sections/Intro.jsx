import React from 'react';
import Card from '../components/Card';
import '../style/sections/intro.scss'

const Intro = () =>{

    const cards = [
        {
            ques:"question one", 
            ans:"answer one"
        },
        {
            ques:"question two",
            ans:"answer two"
        },
        {
            ques:"question three",
            ans:"answer three"
        },
        {
            ques:"question four",
            ans:"answer four"
        },
        {
            ques:"question five",
            ans:"answer five"
        }
    ];

    return(
        <section id="intro-container">
            <h2 className="intro-title">¿Qué es la criónica?</h2>
            <p className="intro-text sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus sem sed dui ultricies venenatis.</p>
            <p className="intro-text">Proin gravida, enim a dignissim viverra, dolor tellus elementum lectus, id consectetur magna massa ac orci. Quisque feugiat, mi id rutrum porta, mauris nisl mollis velit, et commodo dolor massa nec sem. Donec fermentum a lectus interdum tincidunt. Nunc lorem lectus, accumsan eget congue a, aliquam id mauris. Sed dignissim eget ante eu pellentesque. Vestibulum in velit ex.</p>
            <h2 id="title">Preguntas Frecuentes</h2>
            {cards.map ((card, i) => {
                return(
                    <Card key={i} ques={card.ques} ans={card.ans}/>
                )
            })}
        </section>
    )
}

export default Intro; 