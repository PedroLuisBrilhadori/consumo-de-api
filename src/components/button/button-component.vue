<template>
  <a
    @click="click()"
    class="m-3 inline-block px-8 py-3 text-sm font-medium transition border border-current rounded hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
  >
    <div v-if="loading" class="">
      <Loading />
      Carregando...
    </div>
    <div v-else>{{ text }}</div>
  </a>
</template>

<script>
import Loading from "../loading/loading.vue";
export default {
  emits: ["onclick"],

  props: {
    loading: Boolean,
    text: String,
  },

  methods: {
    click() {
      this.$emit("onclick");
    },
  },

  components: { Loading },
};
</script>
