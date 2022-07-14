import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            
            <div className="card-grid">
                {
                    // images.map( image => (
                    //     <li key={image.id}>{ image.title }</li>
                    // ))
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image } // Exparse todas las props del objeto hacia el componente
                        />
                    ))
                }
            </div>
        </>
    )
}
