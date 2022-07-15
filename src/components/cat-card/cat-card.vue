<template>
  <a
    id="cat-card"
    :href="cardState.url"
    target="_blank"
    class="block overflow-hidden rounded-2xl m-6"
  >
    <img
      :src="cardState.url"
      alt="imagem do gatinho :3"
      class="object-cover w-full max-h-80"
    />

    <div class="p-4 bg-gradient-to-r from-orange-500 to-pink-500">
      <h5 class="text-sm text-white">{{ cardState.id }}</h5>

      <p class="mt-1 text-xs text-white">
        {{ cardState.url }}
      </p>
    </div>
  </a>
</template>

<script>
import { getCat } from "./cat.service";

export default {
  emits: ["loaded"],
  data() {
    return {
      cardState: { id: "", url: "" },
      loading: false,
    };
  },

  methods: {
    async setCard() {
      this.loading = true;

      const response = await getCat();

      if (!response.success) {
        return;
      }

      const data = response.data;

      await this._loadImage(data.url);
      this.loading = false;
      this.$emit("loaded");

      this._setCardState(data.id, data.url);
    },

    _loadImage(url) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.addEventListener("load", (e) => resolve(img));
        img.addEventListener("error", () => {
          reject(new Error(`Failed to load image's URL: ${url}`));
        });
        img.src = url;
      });
    },

    _setCardState(id, url) {
      this.cardState.id = id;
      this.cardState.url = url;
    },
  },

  mounted() {
    this.setCard();
  },
};
</script>
