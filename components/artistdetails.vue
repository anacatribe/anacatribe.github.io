<template>
  <div class="min-h-screen pt-16 bg-gray-100">
    <main class="py-10">
      <div class="max-w-3xl px-4 mx-auto sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
        <div class="flex items-center space-x-5">
          <div class="flex-shrink-0">
            <div class="relative">
              <img
                class="object-cover object-center rounded-full w-28 h-28"
                :src="require(`~/assets/img/artists/${image}`)"
                :alt="`Photo of ${artistName}`"
              >
              <span class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
            </div>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">
              {{ artistName }}
            </h1>
            <p class="text-sm font-medium text-gray-500">
              {{ location }}
            </p>
            <ul class="flex mt-2 space-x-3">
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

      <div class="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <section aria-labelledby="applicant-information-title">
            <div class="bg-white shadow sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h2 id="applicant-information-title" class="text-lg font-medium leading-6 text-gray-900">
                  Biography
                </h2>
                <p class="max-w-2xl mt-1 text-sm text-gray-500">
                  <slot />
                </p>
              </div>
              <div v-if="false" class="px-4 py-5 border-t border-gray-200 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Artist Names & Aliases
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ aliases }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Booking
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      booking@lica.com
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section aria-labelledby="notes-title">
            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="px-4 py-5 sm:px-6">
                  <h2 id="notes-title" class="text-lg font-medium text-gray-900">
                    About {{ artistName }}
                  </h2>
                </div>
                <div class="px-4 py-6 sm:px-6">
                  <ul class="space-y-8">
                    <li v-for="(q,i) in qanda" :key="i">
                      <div class="flex space-x-3">
                        <div>
                          <div class="text-base text-gray-900">
                            {{ q.question }}
                          </div>
                          <div class="mt-1 text-sm text-gray-700">
                            <p>
                              {{ q.answer }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
          <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:px-6">
            <ul class="space-y-6">
              <li v-for="img in images" :key="img">
                <img
                  class="object-cover rounded-lg shadow-lg"
                  :src="require(`~/assets/img/artists/${img}`)"
                  :alt="`Photo of ${artistName}`"
                >
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

type QuestionAndAnswer = {
  question: string
  answer: string
}

export default defineComponent({
  props: {
    artistName: {
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
    aliases: {
      type: String,
      required: true
    },
    images: {
      type: Array as PropType<string[]>,
      required: true
    },
    qanda: {
      type: Array as PropType<QuestionAndAnswer[]>,
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
  }
})
</script>
