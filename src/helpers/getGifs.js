export const getGifs = async (category) => {
    const api_key = 'fGBX67yssL9j6qK4QnZ3u47lFBjFECkS';
    const urlBase = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;

    const resp = await fetch(urlBase);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }));

    return gifs
}