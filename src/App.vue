<template>
  <div class="flex flex-col items-center justify-center">
    <Nav></Nav>

    <div class="flex justify-center items-center">
      <CardController />
    </div>

    <div id="load-images" class="hidden"></div>
  </div>
</template>

<script setup>
import Nav from "./components/nav.vue";
import CardController from "./components/card-controller.vue";
</script>
