<template>
  <main>
    <section
      id="donate"
      class="px-4 mb-10 pt-36 sm:px-6 md:px-8 sm:mb-16 md:mb-20"
    >
      <div
        class="max-w-3xl mx-auto "
      >
        <div class="text-center">
          <h2
            class="mb-2 text-2xl font-semibold tracking-wide uppercase sm:text-3xl sm:leading-snug"
          >
            Donations
          </h2>
          <p class="mb-8 text-xl text-gray-400">
            The Anacã Carnaval fundraising campaign has 2 missions:
          </p>
        </div>
        <Organization2
          title="AfroReggae's music studio:"
          content="AfroReggae created this studio so people who can't afford to pay for one can still record their music."
          goal="Renovate it and reopen."
        >
          <a href="https://www.afroreggae.org/" target="_blank">
            <img class="mx-auto md:mx-0" src="https://peoplespalaceprojects.org.uk/wp-content/uploads/2016/06/afroreaggewebsite-3.jpg" alt="Afroreagge Logo"></a>
        </Organization2>

        <Organization2
          title="Água Camelo Kits:"
          content="A backpack that holds up to 15L of water for people to easily collect, transport, filter and store water in their own homes."
          goal="Donate 10 kits to those who don't have access to a source of clean water."
        >
          <a href="https://www.aguacamelo.com.br/" target="_blank">
            <img class="mx-auto md:mx-0" src="https://media-exp1.licdn.com/dms/image/C560BAQGV5xQhtny0EQ/company-logo_200_200/0/1610397753687?e=1622073600&v=beta&t=Vz-iqf7FNkzycuBPC41zBQF6lEH_rkK51HbgFKpnrtA" alt="Água Camelo Logo"></a>
        </Organization2>

        <div class="text-center">
          <p class="font-bold">
            Fundaising Goal
          </p>
          <p>
            We are raising 10.000 REAIS (1500 EUR).
          </p>
        </div>

        <div class="mt-8 text-center">
          <DonateButton />
          <span class="text-xs">All funds will be forwarded to the Organizations.</span>
        </div>
      </div>
    </section>
  </main>
</template>
