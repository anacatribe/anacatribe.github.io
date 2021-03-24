<template>
  <div
    class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0"
  >
    <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
      <img
        class="object-cover rounded-lg shadow-lg"
        :src="require(`~/assets/img/artists/${image}`)"
        alt="Press Photo of DJ Lica"
      >
    </div>
    <div class="sm:col-span-2">
      <div class="space-y-4">
        <div class="space-y-1 font-medium leading-6">
          <nuxt-link :to="`artists/${getArtistName(name)}`">
            <h3 class="text-xl">
              {{ name }}
            </h3>
          </nuxt-link>
          <p class="text-lg text-gray-400">
            {{ location }}
          </p>
        </div>
        <div class="text-lg">
          <p class="text-gray-500">
            <slot />
          </p>
        </div>
        <ul class="flex space-x-5">
          <li v-if="soundcloud">
            <a
              :href="soundcloud"
              target="_blank"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Soundcloud</span>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="currentColor"
              >
                <path
                  d="m20.25 11c-.267 0-.529.029-.782.082-.337-3.409-3.222-6.082-6.718-6.082-.414 0-.75.336-.75.75v12c0 .414.336.75.75.75h7.5c2.069 0 3.75-1.681 3.75-3.75 0-2.067-1.681-3.75-3.75-3.75z"
                />
                <path
                  d="m9 7.25v10.5c0 .414.336.75.75.75s.75-.336.75-.75v-10.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                />
                <path
                  d="m6 10.25v7.5c0 .414.336.75.75.75s.75-.336.75-.75v-7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                />
                <path
                  d="m3 17.75c0 .414.336.75.75.75s.75-.336.75-.75v-7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                />
                <path
                  d="m.75 18.5c.414 0 .75-.336.75-.75v-4.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.5c0 .414.336.75.75.75z"
                />
              </svg>
            </a>
          </li>

          <li v-if="facebook">
            <a
              :href="facebook"
              target="_blank"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Facebook</span>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="currentColor"
              >
                <path
                  d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
                />
              </svg>
            </a>
          </li>

          <li v-if="instagram">
            <a
              :href="instagram"
              target="_blank"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Instagram</span>
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="currentColor"
              >
                <path
                  d="m301 256c0 24.851562-20.148438 45-45 45s-45-20.148438-45-45 20.148438-45 45-45 45 20.148438 45 45zm0 0"
                />
                <path
                  d="m332 120h-152c-33.085938 0-60 26.914062-60 60v152c0 33.085938 26.914062 60 60 60h152c33.085938 0 60-26.914062 60-60v-152c0-33.085938-26.914062-60-60-60zm-76 211c-41.355469 0-75-33.644531-75-75s33.644531-75 75-75 75 33.644531 75 75-33.644531 75-75 75zm86-146c-8.285156 0-15-6.714844-15-15s6.714844-15 15-15 15 6.714844 15 15-6.714844 15-15 15zm0 0"
                />
                <path
                  d="m377 0h-242c-74.4375 0-135 60.5625-135 135v242c0 74.4375 60.5625 135 135 135h242c74.4375 0 135-60.5625 135-135v-242c0-74.4375-60.5625-135-135-135zm45 332c0 49.625-40.375 90-90 90h-152c-49.625 0-90-40.375-90-90v-152c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    soundcloud: {
      type: String,
      required: false,
      default: undefined
    },
    facebook: {
      type: String,
      required: false,
      default: undefined
    },
    instagram: {
      type: String,
      required: false,
      default: undefined
    }
  },
  setup () {
    const getArtistName = (name: string): string => name.toLowerCase()
    return { getArtistName }
  }
})
</script>
