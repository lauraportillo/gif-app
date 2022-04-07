import React from 'react'

const GifGridItem = ({ id, title, url }) => {

    console.log(id, title, url);

    return (
        <div>
            <img src={url} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}

export default GifGridItem;