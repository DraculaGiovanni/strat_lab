<template>
  <div class="bg-white">
    <Header />
    <main class="bg-white">
      <UContainer class="my-12 bg-stratlab-green rounded-md p-6 text-black">
        <div class="flex flex-col md:flex-row gap-6">
          <UContainer class="flex-1 bg-gray-50 rounded-md p-6">
            <h1>Cabinet d’Analyse et d’Etudes d’Appui-conseils</h1>
            <p>
              <span>Strat.lab</span> est un cabinet d’analyses et d’études
              stratégiques spécialisé dans l’accompagnement des organisations
              publiques et privées à travers des services de conseil en
              planification, en évaluation, et en développement. Notre mission
              est de fournir des solutions stratégiques personnalisées qui
              répondent aux défis contemporains des entreprises, des
              collectivités locales et des institutions. Fort de notre
              expertise, nous aidons nos clients à concevoir et à mettre en
              œuvre des stratégies innovantes pour une croissance durable et
              inclusive !
            </p>
            <UButton label="Nous rejoindre" class="mt-4 text-black" />
          </UContainer>
          <UContainer class="flex-1">
            <NuxtImg
              src="./cercle.png"
              alt="About Strat.lab"
              width="600"
              height="400"
              class="rounded-lg shadow-lg w-full h-auto"
            />
          </UContainer>
        </div>
        <div style="position: relative; min-height: 400px">
          <!-- Conteneur vert -->
          <div>
            <UContainer
              class="my-15 bg-stratla-green rounded-md"
              style="
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                min-height: 300px;
                position: absolute;
                width: 100%;
              "
            >
              <h1
                style="
                  margin-top: 20px;
                  font-family: 'Montserrat', sans-serif;
                  font-weight: 800;
                  font-style: italic;
                  font-size: 40px;
                "
              >
                I- Nos Valeurs
              </h1> </UContainer
            >
          </div>

          <!-- Conteneur des boîtes de valeurs -->
          <div
            style="
              position: absolute;
              bottom: -80px;
              left: 0;
              right: 0;
              display: flex;
              justify-content: center;
            "
          >
            <div
              style="
                display: flex;
                flex-direction: row;
                gap: 1.5rem;
                padding: 1.5rem;
                justify-content: center;
                width: 100%;
              "
            >
              <!-- Valeur 1 -->
              <UContainer
                class="bg-white rounded-md p-6 shadow-md"
                style="flex: 1"
              >
                <h3 class="text-xl font-semibold mb-2">Rigueur et expertise</h3>
                <p>
                  Des analyses approfondies et des méthodologies rigoureuses
                  pour des résultats fiables.
                </p>
              </UContainer>

              <!-- Valeur 2 -->
              <UContainer
                class="bg-white rounded-md p-6 shadow-md"
                style="flex: 1"
              >
                <h3 class="text-xl font-semibold mb-2">Innovation</h3>
                <p>
                  Intégration des dernières tendances en matière de gestion, de
                  développement durable et de transformation digitale.
                </p>
              </UContainer>

              <!-- Valeur 3 -->
              <UContainer
                class="bg-white rounded-md p-6 shadow-md"
                style="flex: 1"
              >
                <h3 class="text-xl font-semibold mb-2">Engagement</h3>
                <p>
                  Un appui concret, centré sur la performance durable et la
                  création de long terme projets à fort impact.
                </p>
              </UContainer>

              <!-- Valeur 4 -->
              <UContainer
                class="bg-white rounded-md p-6 shadow-md"
                style="flex: 1"
              >
                <h3 class="text-xl font-semibold mb-2">Partenariat</h3>
                <p>
                  Un accompagnement personnalisé, basé sur la collaboration et
                  la confiance.
                </p>
              </UContainer>
            </div>
          </div>
        </div>
      </UContainer>

      <div>
        <h1
          style="
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 42px;
            text-align: center;
            color: black;
          "
        >
          Soyez l’expert que
          <span style="color: #b0de5c">vous auriez aimé rencontrer.</span>
        </h1>
        <h2
          style="
            margin-top: 20px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
            font-style: italic;
            font-size: 40px;
            text-align: center;
            color: black;
          "
        >
          II- Nos Domaines d’intervention
        </h2>
      </div>

      <UContainer style="display: flex; justify-content: center; gap: 20px">
        <!-- Premier conteneur -->
        <UContainer
          class="flex-1 rounded-md p-6"
          style="background-color: #ffffff; max-width: 400px"
        >
          <NuxtImg
            src="./cercle.png"
            alt="About Strat.lab"
            width="200"
            height="200"
            style="display: block; margin-left: auto; margin-right: auto"
            class="rounded-md"
          />
          <h3
            style="
              margin-top: 20px;
              font-family: 'Montserrat', semiBold;
              font-weight: 100;
              font-size: 40px;
              color: black;
            "
          >
            Conseils Stratégiques
          </h3>

          <ul
            style="
              list-style-type: disc;
              padding: 0;
              display: inline-block;
              text-align: left;
              color: black;
            "
          >
            <li>Planification Stratégique</li>
            <li>Développement de vision d’entreprise</li>
            <li>Conception des plans d’affaires</li>
            <li>Diagnostic et opérationnalisation des stratégies</li>
          </ul>
        </UContainer>

        <!-- Deuxième conteneur -->
        <UContainer
          class="flex-1 rounded-md p-6"
          style="background-color: #ffffff; max-width: 400px"
        >
          <NuxtImg
            src="./cercle.png"
            alt="About Strat.lab"
            width="200"
            height="200"
            style="display: block; margin-left: auto; margin-right: auto"
            class="rounded-md"
          />
          <h3
            style="
              margin-top: 20px;
              font-family: 'Montserrat', semiBold;
              font-weight: 100;
              font-size: 40px;
              color: black;
            "
            class="ml-8"
          >
            Accompagnement et Formation
          </h3>
          <ul
            style="
              list-style-type: disc;
              padding: 0;
              display: inline-block;
              text-align: left;
              color: black;
            "
          >
            <li>Formation en management stratégique</li>
            <li>Coaching d’équipe</li>
            <li>Ateliers de développement des compétences</li>
          </ul>
        </UContainer>
       <br>
       <br>
       <br>
      </UContainer>
     <br>
      <div>
        <UContainer
          class="bg-stratla-green rounded-md p-6 text-white flex flex-col items-center"
        >
          <!-- Section centrée pour h2, h1 et p -->
          <div class="text-center">
            <h2 class="text-2xl font-bold mb-4 text-color-white">
              Une expertise stratégique pour construire l’avenir de vos projets
              et optimiser vos performances
            </h2>
            <h1 class="text-4xl text-[#FDBF3C] font-extrabold mb-4">
              Strat.lab
            </h1>
            <p class="mb-6">
              Une approche centrée sur l'impact durable et la performance des
              projets à long terme.
            </p>
          </div>

          <!-- Section pour les UContainer côte à côte -->
          <div class="flex flex-col md:flex-row gap-6 justify-center">
            <UContainer
              class="flex-1 rounded-md p-6"
              style="background-color: #ffffff; max-width: 400px"
            >
              <NuxtImg
                src="./cercle.png"
                alt="About Strat.lab"
                class="mx-auto mb-4"
              />
              <h3 class="text-xl font-semibold text-center">
                Suivi et Évaluation de Projets
              </h3>
              <ul
                style="
                  list-style-type: disc;
                  padding-left: 20px;
                  text-align: left;
                  color: black;
                "
              >
                <li>Suivi-évolution de projets publics et privés</li>
                <li>Évaluation des performances des politiques publiques</li>
                <li>Analyse des résultats d’impact et recommandations</li>
              </ul>
            </UContainer>

            <UContainer
              class="flex-1 rounded-md p-6"
              style="background-color: #ffffff; max-width: 400px"
            >
              <NuxtImg
                src="./cercle.png"
                alt="About Strat.lab"
                class="mx-auto mb-4"
              />
              <h3 class="text-xl font-semibold text-center">
                Suivi et Évaluation de Projets
              </h3>
              <ul
                style="
                  list-style-type: disc;
                  padding-left: 20px;
                  text-align: left;
                  color: black;
                "
              >
                <li>Suivi-évolution de projets publics et privés</li>
                <li>Évaluation des performances des politiques publiques</li>
                <li>Analyse des résultats d’impact et recommandations</li>
              </ul>
            </UContainer>
          </div>
        </UContainer>
      </div>

     <br>
     <br>
     <br>

      <UContainer>
        <div class="flex flex-row gap-5 justify-center flex-nowrap">
          <UContainer class="flex-1 bg-white rounded-md p-6 max-w-sm">
            <NuxtImg
              src="./cercle.png"
              alt="About Strat.lab"
              width="200"
              height="200"
              style="display: block; margin-left: auto; margin-right: auto"
              class="rounded-md"
            />
            <h1 class="text-2xl font-bold text-center mb-4 text-black">
              Formation, Coaching et Accompagnement
            </h1>
            <ul
              style="
                list-style-type: disc;
                padding-left: 0;
                margin-left: auto;
                margin-right: auto;
                width: fit-content;
                text-align: left;
                color: black;
              "
            >
              <li>
                Formation en gestion de projet et en stratégie d'entreprise
              </li>
              <li>Formation en anglais parlé</li>
              <li>Coaching pour dirigeants et cadres</li>
              <li>
                Atelier sur l'intégration des objectifs de développement durable
                (ODD)
              </li>
            </ul>
          </UContainer>
          <UContainer class="flex-1 bg-white rounded-md p-6 max-w-sm">
            <NuxtImg
              src="./cercle.png"
              alt="About Strat.lab"
              width="200"
              height="200"
              style="display: block; margin-left: auto; margin-right: auto"
              class="rounded-md"
            />
            <h1 class="text-2xl font-bold text-center mb-4 text-black">
              Etudes et Analyses Sectorielles
            </h1>
            <ul
              style="
                list-style-type: disc;
                padding-left: 0;
                margin-left: auto;
                margin-right: auto;
                width: fit-content;
                text-align: left;
                color: black;
              "
            >
              <li>Etude de marches Sectorielles</li>
              <li>
                Analyse prospectives et identification d'opportunité
                d'investissement
              </li>
              <li>
                Construction des bases d"études pour des secteurs spécifiques
                {agriculture, industrie et commerce}
              </li>
            </ul>
          </UContainer>
          <UContainer class="flex-1 bg-white rounded-md p-6 max-w-sm">
            <NuxtImg
              src="./cercle.png"
              alt="About Strat.lab"
              width="200"
              height="200"
              style="display: block; margin-left: auto; margin-right: auto"
              class="rounded-md"
            />
            <h1 class="text-2xl font-bold text-center mb-4 text-black">
              Audi et conseil en performance Organisationnelle
            </h1>
            <ul
              style="
                list-style-type: disc;
                padding-left: 0;
                margin-left: auto;
                margin-right: auto;
                width: fit-content;
                text-align: left;
                color: black;
              "
            >
              <li>Audit organisationnel et restructuration</li>
              <li>
                Conseil en amélioration continue et optimisation des processus
              </li>
              <li>Optimisation des ressources humaines et matérielle</li>
            </ul>
          </UContainer>
        </div>
      </UContainer>

      <UContainer
        class="bg-stratla-green rounded-md p-6 text-white flex flex-col items-center"
      >
        <h1 class="text-2xl font-extrabold text-center mb-4">
          Strat.Lab = <span class="text-yellow-400">Excellence</span>
        </h1>
        <div class="max-w-prose">
          <p>
            "Strat.Lab" est un cabinet d'analyses et d'études stratégiques
            spécialisé dans l'accompagnement des organisations publiques et
            privées à travers des services de conseil en planification, en
            évaluation et en développement. Notre mission est de fournir des
            solutions stratégiques personnalisées qui répondent aux défis
            contemporains des entreprises, des collectivités locales et des
            institutions. Fort de notre expertise, nous aidons nos clients à
            concevoir et à mettre en œuvre des stratégies innovantes pour une
            croissance durable et inclusive !
          </p>
        </div>
        <UButton
          label="En savoir plus sur nous !"
          class="mt-4 bg-white text-black"
        />
      </UContainer>
    </main>
    <br>
    <UContainer class="bg-stratla-green rounded-md p-6 text-white">
      <Footer />
    </UContainer>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap",
      },
    ],
  },
};
</script>

<style scoped>
.bg-stratla-green {
  background-color: #2e5e2d;
}
</style>
