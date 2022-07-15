<template>
  <Nav></Nav>
  <RouterView></RouterView>
</template>

<script>
import Nav from "./components/nav/nav.vue";

export default {
  components: { Nav },
};
</script>
