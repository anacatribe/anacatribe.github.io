<template>
  <div>
    <main>
      <div class="relative flex h-screen bg-center bg-cover" :style="{'background-image': `url(${require('~/assets/bg-rainforest.jpg')})`}">
        <div class="hidden md:block md:absolute md:left-5 md:top-5">
          <img src="~/assets/logo.png" width="180">
        </div>
        <div class="m-auto px-6 md:px-0">
          <img src="~/assets/logo-font-large.png" class="w-auto md:max-w-2xl lg:max-w-4xl">
        </div>
      </div>
      <Navigation />
      <div class="flex h-screen bg-gray-800">
        <div class="m-auto">
          <img src="~/assets/logo.png" class="max-w-sm lg:max-w-2xl">
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">

</script>
