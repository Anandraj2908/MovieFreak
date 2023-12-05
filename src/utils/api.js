import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = import.meta.env.VITE_API_TMDB_API_KEY;


const fetchDataFromApi = (url, params="") => 

    fetch(`${BASE_URL+url +params}?api_key=${TMDB_API_KEY}`).
    then( (response ) => {
        return response;
    }).catch( (error ) =>{
        return error;
    })
export default fetchDataFromApi;

