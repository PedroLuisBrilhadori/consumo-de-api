<template>
  <!-- linear-gradient(145deg, #f05a28 15%, #ec008c 100%) -->
  <header
    class="w-full px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-pink-500 mb-10"
  >
    <div class="flex items-center justify-between h-16">
      <div class="flex-1 md:flex md:items-center md:gap-12">
        <a
          class="block text-teal-300"
          href="https://www.rpjs.com.br"
          target="_blank"
        >
          <img
            class="p-6 h-24 will-change-filter hover:drop-shadow-[0_0_1em_#f7df1eaa]"
            src="assets/logo.svg"
            alt="RP.js"
          />
        </a>
      </div>

      <div class="md:flex md:items-center md:gap-12">
        <nav class="md:block" aria-labelledby="header-navigation">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-white transition hover:text-white/75" href="/cat">
                TheCatAPI
              </a>
            </li>

            <li>
              <a
                class="text-white transition hover:text-white/75"
                href="/google"
              >
                GoogleCloud
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
