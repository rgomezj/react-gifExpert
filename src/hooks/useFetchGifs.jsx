import { useEffect, useState } from "react";
import { fetchGifs } from "../helper/fetchGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async() => {
        const images = await fetchGifs( category  );
        setImages(images);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])
    
    return {
        images,
        isLoading
    }
  }