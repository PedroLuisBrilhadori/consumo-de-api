<template>
  <CatCard v-on:loaded="loaded()" ref="CatCards"></CatCard>

  <a
    @click="changeCard()"
    class="m-3 text-white hover:text-yellow-500 inline-block px-8 py-3 text-sm font-medium transition border border-current rounded hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
  >
    <div v-if="loading" class="text-yellow-500">
      <Loading />
      Carregando...
    </div>
    <div v-else>Mudar Imagem</div>
  </a>
</template>

<script>
import CatCard from "../cat-card/cat-card.vue";
import Loading from "../loading/loading.vue";

export default {
  data() {
    return {
      loading: false,
    };
  },

  methods: {
    changeCard() {
      this.loading = true;
      if (!this.$refs.CatCards.loading) {
        this.$refs.CatCards.setCard();
      }
    },
    loaded() {
      this.loading = false;
    },
  },
  components: { CatCard, Loading },
};
</script>
