// const fetchImages = (query, page) => {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const key = '27797603-9eac1d55668e8ab1d57dfd4bf';
//   return fetch(
//     `${BASE_URL}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(new Error(`Немає таких картинок по запиту ${query}`));
//   });
// };

// export default fetchImages;

const fetchImages = (search, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=27797603-9eac1d55668e8ab1d57dfd4bf&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(r => r.json())
    .then(data => {
      const images = data.hits.map(image => {
        const img = {
          id: image.id,
          largeImageURL: image.largeImageURL,
          webformatURL: image.webformatURL,
        };
        return img;
      });
      return images;
    });
};

export default fetchImages;
