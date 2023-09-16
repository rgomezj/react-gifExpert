import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    
    const  { images, isLoading } = useFetchGifs( category );

    return (
        <>
            { isLoading && <h3>Cargando</h3> }
            <h3>{ category }</h3>
            <div key = { category } className="card-grid">
                { images.map( img => <GifItem key={ img.id } {...img} />) }
            </div>
        </>
    )
  }