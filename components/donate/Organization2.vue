<template>
  <div class="mt-12 text-center md:text-left md:grid md:grid-cols-8 md:gap-4">
    <div class="col-span-2">
      <slot />
    </div>
    <div class="col-span-6 space-y-2">
      <h3 class="text-xl font-semibold tracking-wide uppercase sm:text-2xl sm:leading-snug">
        {{ title }}
      </h3>
      <p>
        {{ content }}
      </p>
      <p>
        <span class="font-bold">Goal: </span>{{ goal }}
      </p>
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
    goal: {
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
