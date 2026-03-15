import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions"

const form = document.querySelector("form");
let searchWord = null;


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = event.currentTarget.elements["search-text"];
    const query = input.value.trim();
    
    if (!query) {
        return;
    } else {
        searchWord = query;
    };

    clearGallery();
    showLoader();

    getImagesByQuery(searchWord)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                })
                return;
            };
            createGallery(data.hits);
        })
        .catch(error => {
            iziToast.error({
                message: error,
            });
        })
        .finally(() => {
            hideLoader();
            event.target.reset();
        });
});
