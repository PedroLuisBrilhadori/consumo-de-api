const baseUrl = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_SOME;

export function SearchMovies(value) {
  console.log(value);
}

export async function getPopularMovies(page) {
  try {
    const url = `${baseUrl}/movie/popular?language=pt-BR&page=${page}&api_key=${apiKey}`;

    const response = await fetch(url);

    const json = await response.json();

    return { success: true, data: json };
  } catch (error) {}
}
