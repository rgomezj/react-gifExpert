export const fetchGifs = async(category) => {
    const key = 'HeAcoz8j71F0avL4sGfb8uREuzMqHIWt';
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ key }&q=${ category }&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    const  { data } = await response.json();

    const gifs = data.map(img => {
        return { id: img.id, title: img.title, url: img.images.fixed_width_downsampled?.url }
    });
    return gifs;
}