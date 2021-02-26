<template>
  <nav class="fixed z-10 w-full bg-gray-900 shadow-md lg:bg-opacity-90">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-20">
        <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
          <!-- Mobile menu button-->
          <button class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" :aria-expanded="expand" @click="expand = !!!expand">
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!expand"
              class="block w-6 h-6"
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
              class="w-6 h-6"
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
        <div class="flex items-center justify-center flex-1 lg:items-stretch lg:justify-center">
          <div class="flex items-center flex-shrink-0">
            <img class="block w-auto h-12 lg:hidden" src="~/assets/logo-small.png" alt="Anaca Tribe Logo">
            <img class="hidden w-auto h-12 lg:block" src="~/assets/logo-small.png" alt="Anaca Tribe Logo">
          </div>
          <div class="hidden lg:flex lg:items-center lg:ml-6">
            <div class="flex space-x-4">
              <nuxt-link v-for="(link, index) in links" :key="index" :to="link.path" class="px-3 py-2 text-lg font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white" exact-active-class="text-white bg-gray-500">
                {{ link.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition
      mode="out-in"
      enter-active-class="duration-150 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div v-if="expand" class="relative block lg:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <nuxt-link v-for="( link, index) in links" :key="index" :to="link.path" class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white" exact-active-class="text-white bg-gray-500">
            {{ link.name }}
          </nuxt-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts">

import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup () {
    const expand = ref(false)

    interface Link {
      name: string,
      path: string
    }

    const links: Link[] = [
      {
        name: 'About Us',
        path: '/#about-us'
      },
      {
        name: 'Get Togethers',
        path: '/#get-togethers'
      },
      {
        name: 'Livestreams',
        path: '/#livestreams'
      },
      {
        name: 'Events',
        path: '/#events'
      },
      {
        name: 'Helping Hands',
        path: '/#helping-hands'
      },
      {
        name: 'Donate',
        path: '/donate'
      },
      {
        name: 'Connect',
        path: '/#connect'
      }
    ]

    return { expand, links }
  }
})
</script>
