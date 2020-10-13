import React from 'react';
import '../style/sections/home.scss';
import img from '../images/background.jpg';

const Home = () =>{
    return(
        <section className="home-container">
            <div className="image-container" style={{
                backgroundImage : `url(${img})`
            }}>
                <div className="black-gradient"></div>
                <div className="text-container">
                    <h1 className="main-title">crionica argentina</h1>
                    <span>Logo</span>
                    <h2 className="title">Phasellus rutrum diam molestie nisi aliquet ac in neque.</h2>
                    <p className="text">"Somos un grupo de crionicistas en Argentina…"</p>
                </div>
            </div>
        </section>
    )
}

export default Home; 