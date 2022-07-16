<template>
  <Search
    :valueSearch="valueSearch"
    v-on:keyup="keyup"
    v-on:search="search()"
  />

  <div>
    <Card
      title="teste"
      description="teste"
      url="https://cdn2.thecatapi.com/images/caq.jpg"
    ></Card>
  </div>
</template>

<script>
import Search from "../components/search/search.vue";
import { SearchMovies } from "../services";
import Card from "../components/card/card.vue";
export default {
  components: { Search, Card },

  data() {
    return {
      valueSearch: "",
    };
  },

  methods: {
    search() {
      SearchMovies(this.valueSearch);
    },
    keyup(valueSearch) {
      this.valueSearch = valueSearch;
    },
  },
};
</script>
