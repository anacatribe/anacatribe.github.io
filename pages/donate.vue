<template>
  <main>
    <section
      id="donate"
      class="px-4 pt-24 mb-10 sm:px-6 md:px-8 sm:mb-16 md:mb-20"
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
          <p class="mb-4 text-xl font-bold">
            Anacã Carnaval Fundraising Campaign Target: R$ 10.000 / € 1.500
          </p>
          <div class="mt-8 text-center">
            <DonateButton />
            <span class="text-xs">All funds will be forwarded to the Organizations.</span>
          </div>
        </div>
        <Organization
          title="Help AfroReggae to renovate their music studio in Rio de Janeiro"
          content="AfroReggae is a Brazilian organization founded in 1993 with a clear mission: to reduce the use of drugs, disease, and crime in the favelas through artistic education. The group has a music studio that is currently unusable due to lack of maintenance. By renovating the studio, we will generate job opportunities and give FREE access to those who can't afford one."
        >
          <a href="https://www.afroreggae.org/" target="_blank">
            <img class="mx-auto md:mx-0" src="https://peoplespalaceprojects.org.uk/wp-content/uploads/2016/06/afroreaggewebsite-3.jpg" alt="Afroreagge Logo"></a>
        </Organization>

        <div class="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-3">
          <MissionBox title="First Mission" content="Help AffroReggae to renovate the music studio." />
          <MissionBox title="Reason" content="Support artists in Rio de Janeiro to record their music." />
          <MissionBox title="Goal" content="Create job opportunities within all the work positions needed inside a music studio." />
        </div>

        <div class="mt-8 text-center">
          <div class="mt-8 text-center" />
          <Organization
            class="mt-20"
            title="Água Camelo Kits"
            content="Água Camelo is a social-impact company that provides access to a safe source of clean water for people in vulnerable situations. They created a backpack that holds up to 15L to collect, transport, store, and filter the water inside the homes of those in need. For this campaign, Agua Camelo will direct 10 kits to a favela that AfroReggae has students, teachers and supporters. Your donation is key to helping them to have a better quality of life."
          >
            <a href="https://www.aguacamelo.com.br/" target="_blank">
              <img class="mx-auto md:mx-0" src="https://media-exp1.licdn.com/dms/image/C560BAQGV5xQhtny0EQ/company-logo_200_200/0/1610397753687?e=1622073600&v=beta&t=Vz-iqf7FNkzycuBPC41zBQF6lEH_rkK51HbgFKpnrtA" alt="Água Camelo Logo"></a>
          </Organization>

          <div class="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-3">
            <MissionBox title="First Mission" content="Donate 10 backpack kits to families in the communities" />
            <MissionBox title="Reason" content="With 10 kits we can directly impact 10 families + neighbors and their community." />
            <MissionBox title="Goal" content="Give access to clean water for 500 people." />
          </div>

          <div class="mt-8 text-center">
            <DonateButton />
            <span class="text-xs">All funds will be forwarded to the Organizations.</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
