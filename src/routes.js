import { createRouter, createWebHistory } from "vue-router";
import CatApi from "./views/cat-api.vue";
import TmdbApi from "./views/tmdb-api.vue";
import Movie from "./views/movie.vue";

const routes = [
  { path: "/", name: "Home", component: CatApi },
  { path: "/cat", name: "TheCatAPI", component: CatApi },
  {
    path: "/tmdb",
    name: "TMDBAPI",
    component: TmdbApi,
  },
  { path: "/tmdb/movie/:id", name: "movieDetails", component: Movie },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
