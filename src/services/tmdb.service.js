const baseUrl = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_SOME;

// https://developers.themoviedb.org/3/movies/get-popular-movies
export async function getPopularMovies(page) {
  try {
    const url = `${baseUrl}/movie/popular?language=pt-BR&page=${page}&api_key=${apiKey}`;
    const response = await fetch(url);

    const json = await response.json();

    return { success: true, data: json };
  } catch (error) {
    return { success: false, error: error };
  }
}

// https://developers.themoviedb.org/3/movies/get-movie-details
export async function getMovieInfo(id) {
  try {
    const url = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=pt-BR`;
    const response = await fetch(url);

    const json = await response.json();

    return { success: true, data: json };
  } catch (error) {
    return { success: false, error: error };
  }
}

// https://developers.themoviedb.org/3/search/search-movies
export async function searchMovies(query, page) {
  try {
    const url = `${baseUrl}/search/movie?api_key=${apiKey}&page=${page}&language=pt-BR&query=${query}`;
    const response = await fetch(url);

    const json = await response.json();

    return { success: true, data: json };
  } catch (error) {
    return { success: false, error: error };
  }
}
