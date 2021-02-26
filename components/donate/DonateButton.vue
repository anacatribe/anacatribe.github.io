<template>
  <div id="d1a72d6a_1614336043" class="powr-paypal-button" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head () {
    return {
      script: [
        {
          src: 'https://www.powr.io/powr.js?platform=htmls'
        }
      ]
    }
  }
})
</script>
