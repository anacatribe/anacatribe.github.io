<template>
  <div class="text-gray-500 antialiased bg-white js-focus-visible">
    <Navigation />

    <main>
      <!-- INTRO -->
      <section class="mb-24 relative flex h-screen bg-center bg-cover background-fade-in-transition" lazy-background="~/assets/bg-rio.jpg">
        <div class="flex flex-col items-center m-auto px-6 md:px-0">
          <div class="max-w-sm md:max-w-sm lg:max-w-xl mb-12">
            <img src="~/assets/logo-font-large.png">
          </div>

          <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl">
            A community for you to learn, teach and together create.
          </h1>
        </div>
      </section>

      <div id="about-us" class="max-w-screen-lg mb-24 xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
        <div class="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
          <section data-aos="fade-in" class="text-center bg-contain bg-no-repeat bg-center py-12" lazy-background="~/assets/logo-black-transparent.png">
            <h2 class="text-2xl sm:text-3xl sm:leading-snug font-semibold tracking-wide uppercase mb-3">
              About Us
            </h2>
            <p class="text-xl sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6">
              We are a Brazilian born, international community that shares the same passion for electronic music. Anacã is here to bring a new concept of events, round tables and get togethers to support and connect artists worldwide. Inspired by the values of love, we decided to create a new world, where sharing is indeed caring.
            </p>
          </section>
        </div>
      </div>

      <section id="get-togethers" class="flex flex-col lg:flex-row text-white bg-gray-900 py-12 px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
        <div class="flex-1 p-12">
          <img src="~/assets/bg-head.png" class="object-contain">
        </div>
        <div class="flex flex-1 items-center place-items-center bg-no-repeat bg-center bg-contain">
          <div class="text-center lg:text-left">
            <h2 data-aos="fade-in" class="text-2xl sm:text-3xl sm:leading-snug font-semibold tracking-wide uppercase  mb-3">
              Get togethers
            </h2>
            <p data-aos="fade-in" class="text-xl sm:text-2xl font-medium sm:leading-10 space-y-6 mb-24">
              We are creating a space for DJs and producers to learn, teach and together create.<br>
              Each participant is contributing in their unique way. The goal is to learn from what others have to offer.
            </p>
          </div>
        </div>
      </section>

      <div id="livestreams" class="max-w-screen-lg mb-24 xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
        <div class="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
          <section class="text-center bg-contain bg-no-repeat bg-center py-12" lazy-background="~/assets/logo-black-transparent.png">
            <h2 data-aos="fade-in" class="text-2xl sm:text-3xl sm:leading-snug font-semibold tracking-wide uppercase mb-3">
              Livestreams
            </h2>
            <p data-aos="fade-in" class="text-xl sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6">
              Livestreams have been a helpful tool, not only for artists but also for their audience during these challenging times. We are working on a new live stream format that we plan to provide to our community from our Berlin headquarters.
            </p>
          </section>
        </div>
      </div>

      <section id="events" class="flex flex-col lg:flex-row text-white bg-gray-900 py-12 px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
        <div class="flex-1 p-12">
          <img src="~/assets/carneval.jpg" class="object-contain rounded-md md:rounded-xl shadow-lg">
        </div>
        <div class="flex flex-1 items-center place-items-center bg-no-repeat bg-center bg-contain">
          <div class="text-center lg:text-left">
            <h2 data-aos="fade-in" class="text-2xl sm:text-3xl sm:leading-snug font-semibold tracking-wide uppercase  mb-3">
              Events
            </h2>
            <p data-aos="fade-in" class="text-xl sm:text-2xl font-medium sm:leading-10 space-y-6 mb-24">
              Promoting the artists growing in our get togethers and bringing the Brazilian culture to the world, we will focus on experiences created to enhance all of your senses. Maybe you end up in a Brazilian wonderland full of goodies ... or meditating in a deep forest.
              Focus on collaboration, this is the place for you to show the world your talent, ideas and passions!
            </p>
          </div>
        </div>
      </section>

      <section id="helping-hands" class="flex flex-col lg:flex-row py-12 px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
        <div class="flex-1 p-12">
          <img src="~/assets/helping-hands.svg" class="object-contain rounded-md md:rounded-xl">
        </div>
        <div class="flex flex-1 items-center place-items-center bg-no-repeat bg-center bg-contain">
          <div class="text-center lg:text-left">
            <h2 data-aos="fade-in" class="text-2xl sm:text-3xl sm:leading-snug font-semibold tracking-wide uppercase  mb-3">
              Helping Hands
            </h2>
            <p data-aos="fade-in" class="text-xl sm:text-2xl font-medium sm:leading-10 space-y-6 mb-24">
              Anacã deeply believes that music can change the world, and for that to happen, we started the project “Helping Hands.” Through our fundraising campaigns, our mission is to provide basic care, knowledge and generate job opportunities.
              <br><br>
              Projects we support:<br><br>

              <strong>AfroReggae:</strong> AfroReggae is a Brazilian organization founded in 1993 with a clear mission: to reduce the use of drugs, disease, and crime in the favelas through artistic education.<br><br>

              <strong>Água Camelo:</strong> A social-impact tech company that provides access to a safe source of clean water for people in vulnerable situations. They created a backpack that holds 15L to collect easily, transport, store, and filter the water inside their own homes.
            </p>
          </div>
        </div>
      </section>
    </main>

    <Contact />
    <Footer />
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
