import { getDetailsMovie } from './get-details';
import { getDetailsTv } from './get-details';

export class movieDiv extends HTMLElement {

    constructor(movie_id, movie_title, movie_name, poster_path, overview, release_date, media_tv) {
        super();
        // this.shadow = this.attachShadow({mode : "open"});
        this.movie_id = movie_id; 
        this.movie_title = movie_title;
        this.poster_path = "https://image.tmdb.org/t/p/w500" + poster_path;
        this.overview = overview;
        this.release_date = release_date;
        this.movie_name = movie_name;
        this.media_tv = media_tv;
        
        //
        //
        //
        // DOM CREATION ELEMNET "MOVIE-DIV"
        this.poster = document.createElement("img"); // IMAGE ELEMENT CREATION
        this.poster.src = this.poster_path;

        this.titleDiv = document.createElement("h3"); // TITLE ELEMENT CREATION
        // this.titleDiv.textContent = this.movie_title;
        // if(this.media_tv === "movie") {
        //     this.titleDiv.textContent = this.movie_title;
        // } else if(this.media_tv === "tv") {
        //     this.titleDiv.textContent = this.movie_name;
        // }

        this.releaseDate = document.createElement("p"); // RELEASE DATE ELEMENT CREATION
        this.releaseDate.textContent = release_date;
        this.releaseDate.classList.add("release-date");

        this.overview = document.createElement("p"); // OVERVIEW ELEMENT CREATION
        this.overview.textContent = overview.substr(0, 100) + "...";
        this.overview.classList.add("overviews");

        this.btnMore = document.createElement("div"); // BUTTON MORE INFO ELEMENT CREATION
        this.btnMore.textContent = "More info";
        this.btnMore.classList.add("more-info-btn");

        this.description = document.createElement("div"); // DESCRIPTION ELEMENT CREATION
        this.description.classList.add("movie-desc");
        this.description.appendChild(this.titleDiv);
        this.description.appendChild(this.releaseDate);
        this.description.appendChild(this.overview);
        this.description.appendChild(this.btnMore);

        this.appendChild(this.poster);
        this.appendChild(this.description);

        this.classList.add("movie-divs");

        // this.btnMore.addEventListener("click", getDetails);

        if(this.media_tv === "movie") {
            this.titleDiv.textContent = this.movie_title;
            this.btnMore.addEventListener("click", getDetailsMovie);
        } else if(this.media_tv === "tv") {
            this.titleDiv.textContent = this.movie_name;
            this.btnMore.addEventListener("click", getDetailsTv);
        }
    }
}