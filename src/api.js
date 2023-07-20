/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// kalo di vite, dia bisanya pake import.meta.env.{variabel}
// nama environtment variabel harus pake VITE_...

import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  return;
};
