<template>
  <Search
    :valueSearch="valueSearch"
    v-on:keyup="keyup"
    v-on:search="search()"
  />
</template>

<script>
import Search from "../components/search/search.vue";
import { SearchMovies } from "../services";
export default {
  components: { Search },

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
