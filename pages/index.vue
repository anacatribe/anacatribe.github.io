<template>
  <div>
    <main>
      <!-- INTRO -->
      <section class="relative flex h-screen mb-24 bg-center bg-cover background-fade-in-transition" lazy-background="~/assets/bg-rio.jpg">
        <div class="flex flex-col items-center px-6 m-auto md:px-0">
          <div class="max-w-sm mb-12 md:max-w-sm lg:max-w-xl">
            <img src="~/assets/logo-font-large.png">
          </div>

          <h1 class="text-3xl text-center text-white md:text-4xl lg:text-5xl">
            A community for you to learn, teach and together create.
          </h1>
        </div>
      </section>

      <div id="about-us" class="max-w-screen-lg mx-auto mb-24 space-y-20 xl:max-w-screen-xl sm:space-y-32 md:space-y-40 lg:space-y-44">
        <div class="px-4 mb-10 sm:px-6 md:px-8 sm:mb-16 md:mb-20">
          <section data-aos="fade-in" class="py-12 text-center bg-center bg-no-repeat bg-contain" lazy-background="~/assets/logo-black-transparent.png">
            <h2 class="mb-3 text-2xl font-semibold tracking-wide uppercase sm:text-3xl sm:leading-snug">
              About Us
            </h2>
            <p class="mb-6 space-y-6 text-xl font-medium sm:text-2xl sm:leading-10">
              We are a Brazilian born, international community that shares the same passion for electronic music. Anacã is here to bring a new concept of events, round tables and get togethers to support and connect artists worldwide. Inspired by the values of love, we decided to create a new world, where sharing is indeed caring.
            </p>
          </section>
        </div>
      </div>

      <section id="get-togethers" class="flex flex-col px-4 py-12 mb-10 text-white bg-gray-900 lg:flex-row sm:px-6 md:px-8 sm:mb-16 md:mb-20">
        <div class="flex-1 p-12">
          <img src="~/assets/bg-head.png" class="object-contain">
        </div>
        <div class="flex items-center flex-1 bg-center bg-no-repeat bg-contain place-items-center">
          <div class="text-center lg:text-left">
            <h2 data-aos="fade-in" class="mb-3 text-2xl font-semibold tracking-wide uppercase sm:text-3xl sm:leading-snug">
              Get togethers
            </h2>
            <p data-aos="fade-in" class="mb-24 space-y-6 text-xl font-medium sm:text-2xl sm:leading-10">
              We are creating a space for DJs and producers to learn, teach and together create.<br>
              Each participant is contributing in their unique way. The goal is to learn from what others have to offer.
            </p>
          </div>
        </div>
      </section>

      <div id="livestreams" class="max-w-screen-lg mx-auto mb-24 space-y-20 xl:max-w-screen-xl sm:space-y-32 md:space-y-40 lg:space-y-44">
        <div class="px-4 mb-10 sm:px-6 md:px-8 sm:mb-16 md:mb-20">
          <section class="py-12 text-center bg-center bg-no-repeat bg-contain" lazy-background="~/assets/logo-black-transparent.png">
            <h2 data-aos="fade-in" class="mb-3 text-2xl font-semibold tracking-wide uppercase sm:text-3xl sm:leading-snug">
              Livestreams
            </h2>
            <p data-aos="fade-in" class="mb-6 space-y-6 text-xl font-medium sm:text-2xl sm:leading-10">
              Livestreams have been a helpful tool, not only for artists but also for their audience during these challenging times. We are working on a new live stream format that we plan to provide to our community from our Berlin headquarters.
            </p>
          </section>
        </div>
      </div>

      <section id="events" class="flex flex-col px-4 py-12 mb-10 text-white bg-gray-900 lg:flex-row sm:px-6 md:px-8 sm:mb-16 md:mb-20">
        <div class="flex-1 p-12">
          <img src="~/assets/carneval.jpg" class="object-contain rounded-md shadow-lg md:rounded-xl">
        </div>
        <div class="flex items-center flex-1 bg-center bg-no-repeat bg-contain place-items-center">
          <div class="text-center lg:text-left">
            <h2 data-aos="fade-in" class="mb-3 text-2xl font-semibold tracking-wide uppercase sm:text-3xl sm:leading-snug">
              Events
            </h2>
            <p data-aos="fade-in" class="mb-24 space-y-6 text-xl font-medium sm:text-2xl sm:leading-10">
              Promoting the artists growing in our get togethers and bringing the Brazilian culture to the world, we will focus on experiences created to enhance all of your senses. Maybe you end up in a Brazilian wonderland full of goodies ... or meditating in a deep forest.
              Focus on collaboration, this is the place for you to show the world your talent, ideas and passions!
            </p>
          </div>
        </div>
      </section>

      <section id="helping-hands" class="flex flex-col px-4 py-12 mb-10 lg:flex-row sm:px-6 md:px-8 sm:mb-16 md:mb-20">
        <div class="flex-1 p-12">
          <img src="~/assets/helping-hands.svg" class="object-contain rounded-md md:rounded-xl">
        </div>
        <div class="flex items-center flex-1 bg-center bg-no-repeat bg-contain place-items-center">
          <div class="text-center lg:text-left">
            <h2 data-aos="fade-in" class="mb-3 text-2xl font-semibold tracking-wide uppercase sm:text-3xl sm:leading-snug">
              Helping Hands
            </h2>
            <p data-aos="fade-in" class="mb-12 space-y-6 text-xl font-medium sm:text-2xl sm:leading-10">
              Anacã deeply believes that music can change the world, and for that to happen, we started the project “Helping Hands.” Through our fundraising campaigns, our mission is to provide basic care, knowledge and generate job opportunities.
              <br><br>
              Projects we support:<br><br>

              <strong>Água Camelo</strong> is a social-impact tech company that provides access to a safe source of clean water for people in vulnerable situations.
              They created a backpack that holds up to 15L to collect, transport, store, and filter the water inside the homes of those in need.
              Most Brazilians who don't have access to clean water usually have to walk km(s) to access some water. We want to change this scenario!
            </p>
            <nuxt-link to="/donate" data-aos="fade-in" class="items-center px-8 py-4 text-xl font-medium text-center text-white bg-gray-900 border border-transparent rounded-full shadow-sm fw-full md:w-auto hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Donate Now
            </nuxt-link>
          </div>
        </div>
      </section>
    </main>

    <Contact />
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
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
