<template>
  <CatCard ref="CatCards"></CatCard>

  <a
    @click="changeCard()"
    class="m-3 text-indigo-600 active:text-indigo-600 inline-block px-8 py-3 text-sm font-medium transition border border-current rounded hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
  >
    Mudar Imagem
  </a>
</template>

<script>
import CatCard from "../cat-card/cat-card.vue";

export default {
  methods: {
    changeCard() {
      this.$refs.CatCards.setCard();
    },
  },
  components: { CatCard },
};
</script>
