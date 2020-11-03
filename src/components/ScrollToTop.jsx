import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../style/components/scrollToTop.scss';

const ScrollToTop = () => {
    return (
        <div className="scrollToTop">
            <FontAwesomeIcon className="up-icon" icon={faChevronUp}/>
        </div>
    )
}

export default ScrollToTop; 