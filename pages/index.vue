<template>
  <div>
    <main class="bg-gray-800">
      <section class="relative flex h-screen bg-center bg-cover" lazy-background="~/assets/bg-rainforest.jpg">
        <div class="hidden md:block md:absolute md:left-5 md:top-5">
          <img src="~/assets/logo.png" width="80">
        </div>
        <div class="m-auto px-6 md:px-0">
          <img src="~/assets/logo-font-large.png" class="w-auto md:max-w-2xl lg:max-w-4xl">
        </div>
      </section>
      <Navigation class="" />
      <section class="relative flex h-screen bg-center bg-cover" :style="{'background-image': `url(${require('~/assets/bg-studio.jpg')})`}">
        <div class="my-auto mx-24">
          <p class="text-white max-w-2xl text-3xl">
            We are a Brazilian born, international community that shares the same passion for electronic music.
            <br><br>
            Anacã is here to bring a new concept of events, round tables, and get-togethers to support and connect artists worldwide.
            <br><br>
            By achieving this, we will be able to assist NGOs in Brazil and other countries.
          </p>
        </div>
      </section>
      <section class="flex h-screen bg-gray-800">
        <div class="m-auto">
          <img src="~/assets/logo.png" class="max-w-sm lg:max-w-2xl">
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">

</script>
