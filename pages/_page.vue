<template>
  <div class="max-w-screen-lg mx-auto mb-24 space-y-20 xl:max-w-screen-xl sm:space-y-32 md:space-y-40 lg:space-y-44">
    <nuxt-content
      class="pt-32 prose text-justify max-w-none"
      :document="page"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ContentPage } from '../components/types'

export default Vue.extend({
  async asyncData ({ $content, params, $config, route }) {
    const path = $config.baseURL + route.fullPath

    const page = await $content('pages', params.page).fetch<ContentPage>()

    return { page, path }
  },
  data () {
    const page: ContentPage = { title: '', description: '' }
    const path = ''

    return { page, path }
  },
  head () {
    const title = this.$data.page.title
    const description = this.$data.page.description
    const meta = [
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: this.$data.path
      }
    ]
    return {
      title,
      meta
    }
  }
})
</script>
