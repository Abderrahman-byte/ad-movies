import '../css/main.css';
import '../css/loading.css';

import { ajaxGet } from './ajax'; // IMPORTING THE AJAX FUNCTION
import { movieDiv } from './movie-comp'; // IMPORTING MOVIE COMPONENT
import { getTrending } from './get-trending'; // IMPORTING GET TRENDING FUNTION
import { getUpComing } from "./get-up-coming"; // IMPORTING GET UP COMING MOVIES FUNCTION
import { getTopRatedMovie } from './get-top-rated'; // IMPORTING GET TOP RATED MOVIES FUNCTION 
import { getPopularMovies } from './get-popular-movies'; // IMPORTING GET POPULAR MOVIES FUNCTION
import { getNowPlaying } from './get-now-playing'; // IMPORTING GET NOW PLAYING FUNCTION
import { getPopularTv } from './get-popular-tv'; // IMPORTING GET POPULAR TV FUNCTION
import { getTopRatedTv } from './get-top-rated-tv'; // IMPORTING GET TOP RATED RV SHOW FUNCTION
import { getAiringToDay } from './get-tv-airing-today'; // IMPORTING GET TV AIRING TODAY FUNCTION

export const contentDiv = document.getElementById("content"); // THE CONTAINER OF THE MOVIES
export const loadingDiv = document.getElementById("loading-div"); // THE LOADING DIVISION 
export const selectDiv = document.getElementById("bg"); // THE POP-UP DIVISION
export const detailsDiv = document.getElementById("details-div"); // THE POP UP OF DETAILS
const removeMenuBtn = document.getElementById("remove-menu"); // THE REMOVE MENU BUTTON
export const menuList = document.getElementById("menu-list"); // THE MENU LIST "UL"
const hamburgerBtn = document.getElementById("hamburger"); // THE HAMBURGER BUTTON
const removeDetailsBtn = document.getElementById("remove-details"); // THE REMOVE DETAILS BUTTON
export const navigationPages = document.getElementById("navigation-div"); // THE NAVIGETION PAGES DIVISION

const upComingBtn = document.getElementById("upcoming-movies"); // THE UP COMING MOVIE BUTTON
const topRatedMovieBtn = document.getElementById("top-rated-movies"); // THE TOP RATED MOVIES BUTTON
const popularMoviesBtn = document.getElementById("popular-movies"); // THE POPULAR MOVIES BUTTON
const nowPlayingBtn = document.getElementById("now-playing"); // THE NOW PLAYING BUTTON
const popularTvBtn = document.getElementById("popular-tv"); // THE POPULAR TV SHOW BUTTON
const topRatedTvBtn = document.getElementById("top-rated-tv"); // THE TOP RATED TV BUTTON
const tvAiringBtn = document.getElementById("tv-airing"); // THE TV AIRING TODAY BUTTON

const nextPageBtn = document.getElementById("next-page"); // THE NEXT PAGE BUTTON 
const previousPageBtn = document.getElementById("previous-page"); // THE PREVIOUS PAGE BUTTON
const pageNumberElt = document.getElementById("page-number"); // ELEMENT OF THE NUMBER OF CURRENT PAGE
export const totalPagesElt = document.getElementById("total-pages"); // ELEMENT OF THE NUMBER OF TOTAL PAGES

export const guideElt = document.getElementById("guide");

let pageNumber = 1;

customElements.define("movie-div", movieDiv); //Defines a new custom element.

// LOGO EVENT ON CLICK
document.getElementById("logo-button").addEventListener("click", (e) =>{
    e.preventDefault();
    getTrending();
    guideElt.textContent = "Trending :";
});

// REMOVE THE MENU BUTTON EVENT ON CLICK
removeMenuBtn.addEventListener("click", () => {
    menuList.style.transform = "translateY(-150%)";
});

// SHOW THE MENU BUTTON EVENT ON CLICK
hamburgerBtn.addEventListener("click", () => {
    menuList.style.transform = "translateY(0)";
});


// REMOVE THE DETAILS BUTTON EVENT ON CLICK
removeDetailsBtn.addEventListener("click", () => {
    loadingDiv.style.display = "flex";
    detailsDiv.style.display = "none";
    selectDiv.style.display = "none";

    setTimeout(() => loadingDiv.style.display = "none", 1000);
});


// CLICK TO UP COMING BUTTON 
upComingBtn.addEventListener("click", (e) => {
    guideElt.textContent = "Up Coming Movies :";
    pageNumber = 1;
    e.preventDefault();
    getUpComing(pageNumber);
    pageNumberElt.textContent = pageNumber;

    nextPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber < totalPages) {
            pageNumber ++;
            getUpComing(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };

    previousPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber > 1) {
            pageNumber --;
            getUpComing(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };

});


// CLICK TO TOP RATED MOVIES BUTTON 
topRatedMovieBtn.addEventListener("click", (e) => {
    guideElt.textContent = "Top Rated Movies :";
    pageNumber = 1;
    e.preventDefault();
    getTopRatedMovie(pageNumber);
    pageNumberElt.textContent = pageNumber;

    nextPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber < totalPages) {
            pageNumber ++;
            getTopRatedMovie(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };

    previousPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber > 1) {
            pageNumber --;
            getTopRatedMovie(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };
});


// CLICK TO POPULAR MOVIES BUTTON
popularMoviesBtn.addEventListener("click", (e) => {
    guideElt.textContent = "Popular Movies :";
    pageNumber = 1;
    e.preventDefault();
    getPopularMovies(pageNumber);
    pageNumberElt.textContent = pageNumber;

    nextPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber < totalPages) {
            pageNumber ++;
            getPopularMovies(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };

    previousPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber > 1) {
            pageNumber --;
            getPopularMovies(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };
});


// CLICK TO PLAYING NOW BUTTON
nowPlayingBtn.addEventListener("click", (e) => {
    guideElt.textContent = "Now Playing :";
    pageNumber = 1;
    e.preventDefault();
    getNowPlaying(pageNumber);
    pageNumberElt.textContent = pageNumber;

    nextPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber < totalPages) {
            pageNumber ++;
            getNowPlaying(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };

    previousPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber > 1) {
            pageNumber --;
            getNowPlaying(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };
});


// CLICK TO POPULAR TV SHOW BUTTON
popularTvBtn.addEventListener("click", (e) => {
    guideElt.textContent = "Popular TV Show :";
    pageNumber = 1;
    e.preventDefault();
    getPopularTv(pageNumber);
    pageNumberElt.textContent = pageNumber;

    nextPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber < totalPages) {
            pageNumber ++;
            getPopularTv(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };

    previousPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber > 1) {
            pageNumber --;
            getPopularTv(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };
});


// CLICK TO RATED TV SHOW BUTTON
topRatedTvBtn.addEventListener("click", (e) => {
    guideElt.textContent = "Top Rated TV Show :";
    pageNumber = 1;
    e.preventDefault();
    getTopRatedTv(pageNumber);
    pageNumberElt.textContent = pageNumber;

    nextPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber < totalPages) {
            pageNumber ++;
            getTopRatedTv(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };

    previousPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber > 1) {
            pageNumber --;
            getTopRatedTv(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };
});


// CLICK TO TV SHOW AIRING TODAy BUTTON
tvAiringBtn.addEventListener("click", (e) => {
    guideElt.textContent = "TV Show Airing Today :";
    pageNumber = 1;
    e.preventDefault();
    getAiringToDay(pageNumber);
    pageNumberElt.textContent = pageNumber;

    nextPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber < totalPages) {
            pageNumber ++;
            getAiringToDay(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };

    previousPageBtn.onclick = () => {
        let totalPages = Number(totalPagesElt.textContent);
        if(pageNumber > 1) {
            pageNumber --;
            getAiringToDay(pageNumber);
            pageNumberElt.textContent = pageNumber;
        }
    };
});

// WHEN THE WINDOW IS LOADED
window.addEventListener("load", getTrending); 


// HIDING MENU LIST ON CLICK 
contentDiv.addEventListener('click', () => menuList.style.transform = "translateY(-150%)");

// TRAITEMENT OF SEARCHING
import { getSearch } from './search';
import { domainToUnicode } from 'url';

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

var queryToSearch;

searchBtn.addEventListener("click", () => {
    guideElt.textContent = "Results :";
    pageNumber = 1;
    if(searchInput.value !== "") {
        queryToSearch = searchInput.value
        getSearch(queryToSearch, pageNumber);
        pageNumberElt.textContent = pageNumber;

        nextPageBtn.onclick = () => {
            let totalPages = Number(totalPagesElt.textContent);
            if(pageNumber < totalPages) {
                pageNumber ++;
                getSearch(queryToSearch, pageNumber);
                pageNumberElt.textContent = pageNumber;
            }
        };
    
        previousPageBtn.onclick = () => {
            let totalPages = Number(totalPagesElt.textContent);
            if(pageNumber > 1) {
                pageNumber --;
                getSearch(queryToSearch, pageNumber);
                pageNumberElt.textContent = pageNumber;
            }
        };
    };

    searchInput.value = "";

});


document.querySelectorAll('#social-media > i > a ').forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
    })
});

document.querySelector("#copyright-text > p > a").addEventListener("click", (e) => {
    e.preventDefault();
});
