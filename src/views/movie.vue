<template>
  <div
    class="flex justify-center w-full bg-gradient-to-r from-orange-500 to-pink-500"
  >
    <img
      v-bind:src="movie.url"
      class="max-h-[32em] p-5 rounded-[2em]"
      v-bind:alt="movie.title"
    />

    <div class="ml-10 p-5 flex flex-col">
      <div>
        <div class="flex flex-wrap">
          <h1 class="text-4xl">
            {{ movie.title }}
          </h1>
          <p class="text-4xl text-white opacity-80">
            ({{ movie.release_date[0] }})
          </p>
        </div>

        <div class="flex flex-wrap">
          <div>
            {{ movie.release_date[2] }}/{{ movie.release_date[1] }}/{{
              movie.release_date[0]
            }}
            (BR)
          </div>

          <Genres v-bind:movie="movie" />
        </div>
      </div>

      <div class="h-20"></div>

      <div>
        <p class="text-2xl my-2">Sipnose:</p>
        <p class="text-sm">{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/search/search.vue";
import { getMovieInfo } from "../services";
import Genres from "../components/genres/genres.vue";

export default {
  components: { Search, Genres },

  mounted() {
    this.id = this.getId();
    this.movieInfo();
  },

  data() {
    return {
      id: "",
      movie: {
        url: "",
        title: "",
        overview: "",
        release_date: [],
        genres: [],
      },
    };
  },

  methods: {
    getId() {
      return window.location.pathname.replace("/tmdb/movie/", "");
    },

    async movieInfo() {
      const { success, data } = await getMovieInfo(this.id);
      if (!success) return;

      console.log(data);

      this.movie.url = `https://image.tmdb.org/t/p/original${data.poster_path}`;
      this.movie.title = data.title;
      this.movie.overview = data.overview;
      this.movie.release_date = data.release_date.split("-");
      this.movie.genres = data.genres;
    },
  },
};
</script>
