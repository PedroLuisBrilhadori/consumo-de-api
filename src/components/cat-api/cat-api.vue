<template>
  <div class="flex flex-col items-center justify-center">
    <Nav
      href="https://docs.thecatapi.com/api-reference"
      title="TheCatAPI"
    ></Nav>

    <div class="m-5 flex flex-wrap justify-center items-center">
      <CardController />
    </div>
  </div>
</template>

<script setup>
import Nav from "../nav/nav.vue";
import CardController from "../card-controller/card-controller.vue";
</script>
