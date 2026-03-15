import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

function getImagesByQuery(query) {
    return axios.get("", {
        params: {
            key: "55028646-8629ed6310cecdce9e4f8a275",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
};

export { getImagesByQuery };
