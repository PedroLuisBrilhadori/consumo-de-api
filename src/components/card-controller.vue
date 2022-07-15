<template>
  <CatCard ref="CatCards"></CatCard>
  <a
    @click="changeCard()"
    class="m-3 inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:shadow-xl active:text-indigo-500 focus:outline-none focus:ring"
  >
    Mudar foto
  </a>
</template>

<script>
import CatCard from "./cat-card.vue";

export default {
  components: {
    CatCard,
  },

  methods: {
    changeCard() {
      console.log(this.$refs.CatCards.setCard());
    },
  },
  components: { CatCard },
};
</script>
