import React from 'react';
import '../style/sections/footer.scss';

const Footer = () => {
    return (
        <section id="footer">
            <h2 className="footer-title">crionica argentina</h2>
            <p className="footer-txt"> Sodales sed et erat nulla, at pretium neque tempor quis. Nulla aliquet, tellus vel suscipit tristique, lacus odio sagittis diam, non placerat justo ante nec odio. Aenean eleifend ex ac lectus placerat, ut gravida quam consectetur.
            </p>
            <ul className="list-links"><h3 className="links-title">links útiles</h3>
                <li className="list-item">Inicio</li>
                <li className="list-item">Política de Privacidad</li>
                <li className="list-item">Términos y condiciones</li>
            </ul>
            <div className="container-rights">
                <p className="copyright">© Copyright Wayne Enterprises. All Rights Reserved. Designed by Dolores Perez Laborda</p>
            </div>
        </section>
    )
}

export default Footer;
