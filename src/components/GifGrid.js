import { useState, useEffect } from 'react';
import '../stylesheets/GifGrid.scss';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    console.log(images);

    useEffect(() => {
        getGifs();
    }, []);


    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=Pqt6FbLsz7CSsS6u9JjEmcoxwSF2tTiI';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs);
    }

    return (
        <>
            <h3>{category}</h3>
            <ol>
                {
                    images.map(({ id, title }) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>
        </>
    )
}

export default GifGrid;