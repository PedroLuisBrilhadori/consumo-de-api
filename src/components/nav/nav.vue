<template>
  <nav class="flex justify-between items-center w-full px-3 mb-5 bg-zinc-900">
    <a
      class="text-4xl hover:drop-shadow-[0_0_1em_rgb(225,93,41)]"
      :href="href"
      target="_blank"
      >{{ title }}</a
    >

    <div class="flex">
      <a href="https://rpjs.com.br" target="_blank">
        <img
          src="../../assets/logo.svg"
          class="p-6 h-24 will-change-filter hover:drop-shadow-[0_0_2em_#f7df1eaa]"
          alt="RP.js logo"
        />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: String,
    href: String,
  },
};
</script>
