import { ajaxGet } from './ajax';
import { contentDiv } from './index';
import { movieDiv } from './movie-comp';
import { loadingDiv } from './index';
import { navigationPages } from './index';

export let arrayOfResults = [];

export const getTrending = ()=> {
    document.getElementById("menu-list").style.transform = "translateY(-150%)"
    loadingDiv.style.display = "flex";
    contentDiv.innerHTML = "";

    let urlTrending = "https://api.themoviedb.org/3/trending/all/day?api_key=ee0d8e2455cdf5f9d57bd5da132d19df";
    ajaxGet(urlTrending)
    .then((arr) => {
        arrayOfResults = arr.results;
        arrayOfResults.forEach((media) => {
            contentDiv.appendChild(new movieDiv(media.id, media.title, media.name, media.poster_path, media.overview, media.release_date, media.media_type))
        });
        window.scrollTo(0, 0);
    })
    .then(() => {
        setTimeout(()=> loadingDiv.style.display = "none", 1000)
    })
    .catch((err) => {
        console.error(err)
    });

    navigationPages.style.display = "none";
}