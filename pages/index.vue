<template>
  <div>
    <Navigation class="" />
    <main>
      <!-- INTRO -->
      <section class="relative flex h-screen bg-center bg-cover background-fade-in-transition" lazy-background="~/assets/rio.jpg">
        <div class="flex flex-col items-center m-auto px-6 md:px-0">
          <div class="max-w-sm md:max-w-sm lg:max-w-xl mb-12">
            <img src="~/assets/logo-font-large.png">
          </div>

          <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl">
            A place for you to learn, teach, and together create.
          </h1>
        </div>
      </section>

      <section class="flex place-items-center my-12 py-36 justify-center bg-contain bg-no-repeat bg-center" lazy-background="~/assets/logo-black-transparent.png">
        <p data-aos="fade-in" class="paragraph text-gray-900 text-center max-w-lg px-6">
          We are a Brazilian born, international community that shares the same passion for electronic music.
          Anacã is here to bring a new concept of events, round tables, and get-togethers to support and connect artists worldwide.
          By achieving this, we are able to assist NGOs in Brazil and other countries.
        </p>
      </section>

      <section class="flex h-screen bg-gradient-to-br bg-gray-900 flex-col lg:flex-row">
        <div class="flex flex-1 bg-contain bg-center bg-no-repeat" lazy-background="~/assets/bg-head.png" />
        <div class="flex flex-1 items-center place-items-center bg-no-repeat bg-center bg-contain">
          <div class="my-auto">
            <p class="paragraph px-3 md:px-12 text-center text-white">
              This is a space for DJ's and producers to learn, teach and together create.
              The meetings consist of 5 people, with one leader, who will develop a starting sample.
              Each participant will contribute with what they know and learn from what others have to offer.
            </p>
          </div>
        </div>
      </section>

      <section class="flex place-items-center my-12 py-36 justify-center bg-contain bg-no-repeat bg-center" lazy-background="~/assets/logo-black-transparent.png">
        <p data-aos="fade-in" class="paragraph text-gray-900 text-center max-w-lg ">
          We are a Brazilian born, international community that shares the same passion for electronic music.
          Anacã is here to bring a new concept of events, round tables, and get-togethers to support and connect artists worldwide.
          By achieving this, we are able to assist NGOs in Brazil and other countries.
        </p>
      </section>

      <section class="flex flex-col lg:flex-row bg-gray-900">
        <div class="flex flex-1 items-center place-items-center">
          <div class="my-auto">
            <p class="paragraph px-3 md:px-12 text-center text-white">
              This is the space for DJ's and producers to learn, teach together create.
              The meetings consist of 5 people, with one leader, who will develop a starting sample.
              Each participant will contribute with what they know and learn from what others have to offer.
            </p>
          </div>
        </div>
        <div class="flex flex-1 p-12">
          <img src="~/assets/carneval.jpg" class="rounded-lg shadow-lg">
        </div>
      </section>
      <section class="flex place-items-center my-12 py-36 justify-center bg-contain bg-no-repeat bg-center" lazy-background="~/assets/logo-black-transparent.png">
        <p data-aos="fade-in" class="paragraph text-gray-900 text-center max-w-lg ">
          We are a Brazilian born, international community that shares the same passion for electronic music.
          Anacã is here to bring a new concept of events, round tables, and get-togethers to support and connect artists worldwide.
          By achieving this, we are able to assist NGOs in Brazil and other countries.
        </p>
      </section>
      <section class="flex justify-center bg-gray-900 h-screen place-items-center">
        <div class="my-12 max-w-lg md:max-w-5xl py-20 px-6 bg-contain bg-no-repeat bg-center" lazy-background="~/assets/bg-anaca-logo.png">
          <p data-aos="fade-in" class="paragraph text-white text-center">
            We are a Brazilian born, international community that shares the same passion for electronic music.
            <br><br>
            Anacã is here to bring a new concept of events, round tables, and get-togethers to support and connect artists worldwide.
            <br><br>
            By achieving this, we are able to assist NGOs in Brazil and other countries.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
.paragraph {
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
