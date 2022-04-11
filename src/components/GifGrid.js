import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import '../stylesheets/GifGrid.scss';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            <div className='cardGrid'>
                {
                images.map(img => (
                    <GifGridItem key={img.id} {...img} />
                    ))
            }
            </div>
        </>
    )
}

export default GifGrid;