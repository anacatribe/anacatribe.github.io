<template>
  <div id="connect" class="relative bg-gray-900 text-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2" />
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div class="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2 class="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Connect
          </h2>
          <p class="mt-3 text-lg leading-6">
            If you believe music is a powerful tool that’s been created thousands of years ago so we could connect, then you are on the right place.
            Music has no color, nationality or gender! We are all together on this.

            Please contact us if you would like to join the tribe.
          </p>
        </div>
      </div>
      <div class="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form id="contact-form" class="grid grid-cols-1 gap-y-6 text-gray-900" @submit.prevent="submit">
            <div>
              <label for="full_name" class="sr-only">Full name</label>
              <input
                id="full_name"
                v-model="form.name"
                type="text"
                name="full_name"
                autocomplete="name"
                class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Full name"
              >
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Email"
              >
            </div>

            <div>
              <label for="message" class="sr-only">Message</label>
              <textarea
                id="message"
                v-model="form.msg"
                name="message"
                rows="4"
                class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-gray-500 border-gray-300 rounded-md"
                placeholder="Message"
              />
            </div>
            <div>
              <button type="submit" :class="{'opacity-50 cursor-not-allowed': !form.filled}" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send
              </button>
            </div>
            <p v-if="form.sent" class="text-green-400">
              Thanks for getting in touch. We will come back to you shortly.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from '@nuxtjs/composition-api'
import emailjs from 'emailjs-com'

export default defineComponent({
  setup () {
    const form = reactive({
      name: '',
      email: '',
      msg: '',
      sent: false,
      filled: false
    })

    watch(
      () => form,
      (form) => {
        if (form.name && form.email && form.msg) {
          form.filled = true
        } else {
          form.filled = false
        }
      },
      { deep: true }
    )

    const submit = (): void => {
      if (form.filled) {
        form.sent = false
        try {
          emailjs.send('default_service', 'template_42rzgbg',
            {
              from_name: form.name,
              reply_to: form.email,
              message: form.msg
            }, 'user_sSgx4RpricoPOuv8A56Y9')
        } catch (_) {
        }

        // Reset form field
        form.name = ''
        form.email = ''
        form.msg = ''
        form.sent = true
      }
    }

    return { submit, form }
  }
})
</script>
