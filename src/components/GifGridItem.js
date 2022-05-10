import React from 'react'
import PropTypes from 'prop-types'
import '../stylesheets/GifGridItem.scss';

const GifGridItem = ({ title, url }) => {

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img className='card__image' src={url} alt={title} />
            <p className='card__text'>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


export default GifGridItem;