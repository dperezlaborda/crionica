import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
    return (
        <section>
            <h2>Contacto</h2>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@example.com</p>
            <div>
                <form>
                    <input/>
                    <input/>
                </form>
            </div>
        </section>
    )
}

export default Contact
