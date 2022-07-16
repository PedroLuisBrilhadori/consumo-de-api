<template>
  <Search
    :valueSearch="valueSearch"
    v-on:keyup="keyup"
    v-on:search="search()"
  />

  <div class="flex flex-wrap items-start justify-center">
    <div v-for="movie in this.movies" v-bind:key="movie.id">
      <Card
        :title="movie.title"
        :description="movie.overview"
        :srcImage="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
        :url="`/tmdb/movie/${movie.id}`"
        class="max-w-xs"
      ></Card>
    </div>
  </div>
</template>

<script>
import Search from "../components/search/search.vue";
import { SearchMovies, getPopularMovies } from "../services";
import Card from "../components/card/card.vue";
export default {
  components: { Search, Card },

  mounted() {
    this.getMovies();
  },

  data() {
    return {
      valueSearch: "",
      movies: [],
      page: 1,
      loading: false,
    };
  },

  methods: {
    async getMovies() {
      this.loading = true;

      const { success, data } = await getPopularMovies(this.page);

      if (!success) return;

      data.results.forEach((movie) => {
        this.movies.push(movie);
      });

      this.loading = false;
    },

    search() {
      SearchMovies(this.valueSearch);
    },
    keyup(valueSearch) {
      this.valueSearch = valueSearch;
    },
  },
};
</script>
