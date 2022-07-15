<template>
  <a
    id="cat-card"
    href=""
    target="_blank"
    class="block overflow-hidden rounded-2xl m-6"
  >
    <img
      :src="cardState.url"
      loading="lazy"
      alt="imagem do gatinho :3"
      class="object-cover w-full max-h-80"
    />

    <div class="p-4 bg-gray-900">
      <h5 class="text-sm text-white">{{ cardState.id }}</h5>

      <p class="mt-1 text-xs text-gray-500">
        {{ cardState.url }}
      </p>
    </div>
  </a>
</template>

<script>
import { getCat } from "../http";

export default {
  data() {
    return {
      cardState: { id: "", url: "" },
    };
  },

  methods: {
    async setCard() {
      const response = await getCat();

      if (!response.success) {
        return;
      }

      const data = response.data;
      this._setCardState(data.id, data.url);
    },

    _setCardState(id, url) {
      this.cardState.id = id;
      this.cardState.url = url;
    },

    getCardState() {
      return this.cardState;
    },
  },

  mounted() {
    this.setCard();
  },
};
</script>
