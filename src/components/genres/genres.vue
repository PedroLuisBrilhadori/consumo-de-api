<template>
  <div class="mx-1 flex flex-wrap">
    •
    <div class="mx-1" v-for="(genre, index) in movie.genres" :key="genre.id">
      <p v-if="index !== movie.genres.length - 1">{{ genre.name }},</p>
      <p v-else>{{ genre.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
};
</script>
