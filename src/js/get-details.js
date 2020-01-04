import { ajaxGet } from './ajax';
import { loadingDiv } from './index';
import { selectDiv } from './index';
import { detailsDiv } from './index';

export const getDetailsMovie = (e) => {
    var lines = document.getElementsByClassName("remove-detail-lines");
    loadingDiv.style.display = "flex";
    let id = e.target.parentElement.parentElement.movie_id;
    let poster = e.target.parentElement.parentElement.poster_path;
    document.getElementById("details-poster").src = poster ;
    // https://api.themoviedb.org/3/movie/398978?api_key=ee0d8e2455cdf5f9d57bd5da132d19df&language=en-US
    let urlTo = "https://api.themoviedb.org/3/movie/" + id + "?api_key=ee0d8e2455cdf5f9d57bd5da132d19df&language=en-US";

    selectDiv.style.background = "";
    for(let i = 0; i < lines.length; i++) {
        lines[i].style.background = "white";
    }

    ajaxGet(urlTo)
    .then((e) => {
        console.log(e)
        return e;
    })
    .then((e) => {
        selectDiv.style.background = `url('https://image.tmdb.org/t/p/w500${e.backdrop_path}')`;
        selectDiv.style.display = "flex";
        detailsDiv.style.display = "flex";
        document.getElementById("details-title").textContent = e.original_title;
        document.getElementById("details-type").textContent = "MOVIE";
        if(e.vote_average == 0) {
            document.getElementById("details-vote").textContent = "_";
        } else {
            document.getElementById("details-vote").textContent = e.vote_average;
        }

        document.getElementById("details-genres").textContent = "";
        e.genres.forEach(element => {
            document.getElementById("details-genres").textContent += element["name"] + " "; 
        });

        if(e.backdrop_path == null) {
            selectDiv.style.background = "";
            selectDiv.style.background = "white";
            for(let i = 0; i < lines.length; i++) {
                lines[i].style.background = "black";
            }
        }

        document.getElementById("details-date").textContent = e.release_date;
        document.getElementById("details-overview").textContent = e.overview;
        document.getElementById("details-website").href = e.homepage;
        document.getElementById("details-saison").textContent = "";
        window.scrollTo(0, 0);
    })
    .then(() => {
        setTimeout(()=> loadingDiv.style.display = "none", 1000)
    })
    .catch((err) => console.error(err));  
}

export const getDetailsTv = (e) => {
    var lines = document.getElementsByClassName("remove-detail-lines");
    loadingDiv.style.display = "flex";
    let id = e.target.parentElement.parentElement.movie_id;
    let poster = e.target.parentElement.parentElement.poster_path;
    document.getElementById("details-poster").src = poster ;
    // https://api.themoviedb.org/3/movie/398978?api_key=ee0d8e2455cdf5f9d57bd5da132d19df&language=en-US
    let urlTo = "https://api.themoviedb.org/3/tv/" + id + "?api_key=ee0d8e2455cdf5f9d57bd5da132d19df&language=en-US";

    selectDiv.style.background = "";
    for(let i = 0; i < lines.length; i++) {
        lines[i].style.background = "white";
    }

    ajaxGet(urlTo)
    .then((e) => {
        console.log(e)
        return e;
    })
    .then((e) => {
        selectDiv.style.background = `url('https://image.tmdb.org/t/p/w500${e.backdrop_path}')`;
        selectDiv.style.display = "flex";
        detailsDiv.style.display = "flex";
        document.getElementById("details-title").textContent = e.original_name;
        document.getElementById("details-type").textContent = "TV";
        if(e.vote_average == 0) {
            document.getElementById("details-vote").textContent = "_";
        } else {
            document.getElementById("details-vote").textContent = e.vote_average;
        }
        document.getElementById("details-genres").textContent = "";
        e.genres.forEach(element => {
            document.getElementById("details-genres").textContent += element["name"] + " "; 
        });

        if(e.backdrop_path == null) {
            selectDiv.style.background = "";
            selectDiv.style.background = "white";
            for(let i = 0; i < lines.length; i++) {
                lines[i].style.background = "black";
            }
        }

        document.getElementById("details-date").textContent = e.first_air_date;
        document.getElementById("details-overview").textContent = e.overview;
        document.getElementById("details-website").href = e.homepage;
        document.getElementById("details-saison").textContent = "Nb of seasons: " + e.number_of_seasons + " , Nb of episodes : " + e.number_of_episodes;
        window.scrollTo(0, 0);
    })
    .then(() => {
        setTimeout(()=> loadingDiv.style.display = "none", 1000)
    })
    .catch((err) => console.error(err));  
}
