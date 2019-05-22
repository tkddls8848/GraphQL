import fetch from "node-fetch";
import { response } from "express";
const API_URL = "https://yts.am/api/v2/list_movies.json?";
const API_URL_DETAILS = "https://yts.am/api/v2/movie_details.json?";
const API_URL_SUGGESTIONS = "https://yts.am/api/v2/movie_suggestions.json?";

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if(limit > 0){
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating != null){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(`${REQUEST_URL}`)

        .then(res => res.json())
        .then(json => json.data.movies);
    
}

export const getMovie = (id) => {
    let REQUEST_URL = API_URL_DETAILS;
    if(id){
        REQUEST_URL += `movie_id=${id}`;
    } else {
        response.status(400);
    }
    return fetch(`${REQUEST_URL}`)
        .then(res => res.json())
        .then(json => json.data.movie);
}

export const getSuggestions = (id) => {
    let REQUEST_URL = API_URL_SUGGESTIONS;
    if(id){
        REQUEST_URL += `movie_id=${id}`;
    } else {
        response.status(400);
    }
    return fetch(`${REQUEST_URL}`)
        .then(res => res.json())
        .then(json => json.data.movies);
}