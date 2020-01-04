import { ajaxGet } from './ajax';
import { contentDiv } from './index';
import { movieDiv } from './movie-comp';
import { loadingDiv } from './index';
import { menuList } from './index';
import { navigationPages } from './index';
import { totalPagesElt } from './index';

export let arrayOfResults = [];

export const getAiringToDay = (page) => {
    navigationPages.style.display = "flex";
    loadingDiv.style.display = "flex";
    contentDiv.innerHTML = "";
    let urlTo = "https://api.themoviedb.org/3/tv/airing_today?api_key=ee0d8e2455cdf5f9d57bd5da132d19df&language=en-US&page=" + page;

    ajaxGet(urlTo)
    .then((arr) => {
        menuList.style.transform = "translateY(-150%)";
        totalPagesElt.textContent = arr.total_pages;
        arrayOfResults = arr.results;
        arrayOfResults.forEach((media) => {
            contentDiv.appendChild(new movieDiv(media.id, media.title, media.name, media.poster_path, media.overview, media.release_date, "tv"));
        });
        window.scrollTo(0, 0);
    })
    .then(() => {
        setTimeout(()=> loadingDiv.style.display = "none", 1000)
    })
    .catch((err) => {
        console.error(err)
    });
}