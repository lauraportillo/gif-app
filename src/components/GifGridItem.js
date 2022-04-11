import React from 'react'
import '../stylesheets/GifGridItem.scss';

const GifGridItem = ({ id, title, url }) => {

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img className='card__image' src={url} alt={title} />
            <p className='card__text'>{title}</p>
        </div>
    )
}

export default GifGridItem;