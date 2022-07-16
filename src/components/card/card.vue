<template>
  <a
    id="cat-card"
    :href="url"
    target="_blank"
    class="block overflow-hidden rounded-2xl m-6"
  >
    <img :src="srcImage" :alt="alt" class="object-cover w-full max-h-80" />

    <div class="p-4 bg-gradient-to-r from-orange-500 to-pink-500">
      <h5 class="text-sm text-white">{{ title }}</h5>

      <p class="mt-1 text-xs text-white">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    url: String,
    alt: String,
    srcImage: String,
  },
};
</script>
