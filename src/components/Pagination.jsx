import React from 'react';
import '../style/components/pagination.scss';

const Pagination = ({ newsPerPage, totalNews, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalNews / newsPerPage); i ++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map( number =>(
                    <li key={number} className="number">
                        <div onClick={() => paginate(number)} className="link">
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;