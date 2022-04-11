import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import '../stylesheets/GifGrid.scss';


const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p>Loading...</p>}

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