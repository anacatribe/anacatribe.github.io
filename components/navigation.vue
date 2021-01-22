<template>
  <nav class="bg-gray-900">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-20">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" :aria-expanded="expand" @click="expand = !!!expand">
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!expand"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-12 w-auto" src="~/assets/logo-small.png" alt="Anaca Tribe Logo">
            <img class="hidden lg:block h-12 w-auto" src="~/assets/logo-small.png" alt="Anaca Tribe Logo">
          </div>
          <div class="hidden md:flex md:items-center md:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a v-for="link in links" :key="link" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">{{ link }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="expand" class="block sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a v-for="link in links" :key="link" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{ link }}</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">

import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup () {
    const expand = ref(false)

    const links = ['About Us', 'Get Togethers', 'Events', 'Livestreams', 'Helping Hands', 'Donation', 'Contact']

    return { expand, links }
  }
})
</script>
