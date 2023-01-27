import fetch from "node-fetch";

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api'; //Base path to API

//Get all movies from API
export async function loadMovies() {
  const res = await fetch(API_BASE + '/movies');
  const payload = await res.json();
  return payload.data;
}

//Get one single movie with id from API
export async function loadMovie(id) {
  const res = await fetch(API_BASE + '/movies/' + id);
  const payload = await res.json();
  return payload.data;
}