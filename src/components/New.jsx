import React from 'react'

const New = ({ news }) => {

    return (
        <ul>
            {news.map( n => (
                <li key={n.id}>
                    {n.title}
                </li>
            ))}
        </ul>
    )
};

export default New;