import { createRouter, createWebHistory } from "vue-router";
import CatApi from "./views/cat-api.vue";
import Home from "./views/home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/cat", name: "TheCatAPI", component: CatApi },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
