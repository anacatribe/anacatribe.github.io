<template>
  <div>
    <Navigation class="fixed z-10 w-full shadow-md" />
    <main>
      <!-- INTRO -->
      <section class="relative flex h-screen bg-center bg-cover background-fade-in-transition" lazy-background="~/assets/bg-rainforest.jpg">
        <div v-if="false" class="hidden md:block md:absolute md:left-5 md:top-5">
          <img src="~/assets/logo.png" width="80">
        </div>
        <div class="m-auto px-6 md:px-0">
          <img src="~/assets/logo-font-large.png" class="w-auto md:max-w-2xl lg:max-w-4xl">
        </div>
      </section>
      <!-- STUDIO -->
      <section class="relative flex h-screen bg-center bg-cover background-fade-in-transition" lazy-background="~/assets/bg-studio.jpg">
        <div class="my-auto mx-24 max-w-lg">
          <h1 data-aos="fade-in" class="text-white text-4xl md:text-6xl font-medium mb-6">
            About Us
          </h1>
          <p data-aos="fade-in" class="paragraph">
            We are a Brazilian born, international community that shares the same passion for electronic music.
            <br><br>
            Anacã is here to bring a new concept of events, round tables, and get-togethers to support and connect artists worldwide.
            <br><br>
            By achieving this, we will be able to assist NGOs in Brazil and other countries.
          </p>
        </div>
      </section>
      <!--  -->
      <section class="flex flex-row bg-gray-800">
        <div class="flex px-3 my-6">
          <div class="bg-no-repeat bg-center bg-contain" lazy-background="~/assets/background.svg">
            <p class="paragraph py-40 px-10">
              This is the space for DJ's and producers to learn, teach together create.
              <br>The meetings consist of 5 people, with one leader, who will develop a starting sample.
              <br>
              Each participant will contribute with what they know and learn from what others have to offer.
            </p>
          </div>
          1
        </div>
        <div class="flex-1 bg-green-300">
          sga
        </div>
      </section>

      <section class="flex h-screen bg-gray-800">
        <div class="m-auto">
          <img src="~/assets/logo.png" class="max-w-sm lg:max-w-2xl">
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
.paragraph {
  @apply text-white;
  @apply text-3xl;
  @screen md {
    @apply text-4xl;
  }
}

.background-fade-in-transition {
  -webkit-animation: fadein 2s;
   -moz-animation: fadein 2s;
    -ms-animation: fadein 2s;
     -o-animation: fadein 2s;
        animation: fadein 2s;
}

@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
</style>
