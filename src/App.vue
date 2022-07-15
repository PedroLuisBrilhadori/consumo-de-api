<script setup>
import Nav from "./components/nav.vue";
import CatCard from "./components/cat-card.vue";
import ChangeButton from "./components/change-button.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <Nav></Nav>

    <div class="flex justify-center items-center">
      <CatCard />

      <ChangeButton></ChangeButton>
    </div>

    <div id="load-images" class="hidden"></div>
  </div>
</template>
