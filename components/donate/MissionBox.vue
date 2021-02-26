<template>
  <div class="pt-6 text-center">
    <div class="flow-root h-full px-6 pb-8 bg-gray-100 rounded-lg">
      <div class="-mt-6">
        <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">
          {{ title }}
        </h3>
        <p class="mt-5 text-base text-gray-500">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
})
</script>
