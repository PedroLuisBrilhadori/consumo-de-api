<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
  <Nav></Nav>
  <RouterView></RouterView>
</template>

<script>
import Nav from "./components/nav/nav.vue";

export default {
  components: { Nav },
};
</script>
