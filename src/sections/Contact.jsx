import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../style/sections/contact.scss'

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contacto</h2>
            <div className="email">
                <FontAwesomeIcon className="env-icon" icon={faEnvelope} />
                <p>info@example.com</p>
            </div>
            <form>
                <input placeholder="Tu Nombre"/>
                <input placeholder="Tu Email"/>
                <textarea rows="4" placeholder="Escribinos" />
            </form>
            <button className="send-bttn">Enviar</button>
        </section>
    )
}

export default Contact
