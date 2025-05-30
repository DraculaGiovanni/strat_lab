<template class="bg-white">
  <div class="bg-white">
    <!-- Appel du composant Header -->
    <Header />

    <main class="bg-white">
      <UContainer class="my-15 bg-stratlab-green rounded-md">
        <div class="flex flex-row gap-15 items-center justify-center p-15">
          <!-- Côté gauche : texte -->
          <div class="flex-1 text-center md:text-left">
            <h2 class="text-3xl font-bold text-white mb-4">
              Nous avons façonné le paysage de coaching. Aujourd'hui, nous le
              propulsons vers l'avenir.
            </h2>
            <p class="text-lg text-white mb-6 ml-28">
              "Strat.Lab" est un cabinet d'analyse, d’études et d’appui-conseils
              spécialisé dans l'accompagnement des organisations publiques et
              privées à travers des services de conseil en planification, en
              évolution et en développement.
            </p>
            <UButton
              label="Apprendre plus sur nous"
              color="neutral"
              variant="solid"
              to="/about"
              class="hover:bg-gray-200"
            />
          </div>
          <!-- Côté droit : image -->
          <div class="flex-1 flex justify-center items-center">
            <NuxtImg
              src="./cercle.png"
              alt="Stratlab Image"
              width="200"
              height="200"
              class="rounded-md"
            />
          </div>
        </div>
      </UContainer>
      <br >
      <UContainer class="my-15 bg-white">
        <div class="flex flex-row gap-8">
          <!-- Côté gauche : image -->
          <div class="flex-1 flex justify-center items-center">
            <NuxtImg
              src="./cercle.png"
              alt="Stratlab Image"
              width="200"
              height="200"
              class="rounded-md"
            />
          </div>
          <!-- Côté droit : texte -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Libérer le pouvoir de changer le monde grâce à Strat.Lab
            </h1>
            <p class="text-lg text-gray-700 mb-4 font-montserrat">
              Nous comprenons le changement et la transformation.
            </p>
            <p class="text-lg text-gray-700 mb-4 font-montserrat">
              C'est pourquoi nous sommes la référence mondiale en matière de
              coaching professionnel. Nous réunissons en un seul lieu les
              aspects clés du secteur du coaching.
            </p>
            <p class="text-lg text-gray-700 mb-6 font-montserrat">
              Mais notre vision est plus grande que cela. Nous imaginons un
              monde où le coaching est le moteur d'une société inspirante et
              prospère. En établissant les normes d'éthique et d'excellence les
              plus élevées pour les professionnels du coaching du monde entier,
              nous ouvrons la voie à un avenir transformateur.
            </p>
          </div>
        </div>
      </UContainer>
      <br >

      <UContainer class="my-15 bg-stratla-green rounded-md">
        <br />
        <div class="flex flex-col gap-8">
          <!-- Premier div : h2 en haut, p et bouton en bas -->
          <div class="flex flex-col justify-between min-h px-4">
            <h2 class="text-3xl font-bold text-[#FDBF3C] font-montserrat ml-15">
              Nos Valeurs Fondamentales
            </h2>
            <p class="text-lg text-white mb-6 ml-15">
              Une approche centrée sur l'impact durable et la performance des
              projets à long terme.
              <UButton
                label="Nos Valeurs"
                color="stratlab-yellow"
                variant="solid"
                to="/about"
                class="hover:bg-gray-200 ml-4"
              />
            </p>
          </div>
          <!-- Deux autres div : côte à côte -->
          <div class="flex flex-row gap-8">
            <!-- Première section -->
            <div class="flex-1 flex flex-col items-center text-center">
              <NuxtImg
                src="./cercle.png"
                alt="Stratlab Image"
                width="200"
                height="200"
                class="rounded-md mb-4"
              />
              <h3 class="text-2xl font-bold text-white mb-4 ml-15">
                Professionnalisme
              </h3>
              <p class="text-lg text-white mb-4 ml-15">
                Intégration des dernières tendances en matière de gestion de
                développement durable, et de transformation digitale.
              </p>
            </div>
            <!-- Deuxième section -->
            <div class="flex-1 flex flex-col items-center text-center">
              <NuxtImg
                src="./cercle.png"
                alt="Stratlab Image"
                width="200"
                height="200"
                class="rounded-md mb-4"
              />
              <h3 class="text-2xl font-bold text-white ml-15 mb-4">
                Collaboration
              </h3>
              <p class="text-lg text-white mb-6 ml-15">
                Un accompagnement personnalisé pour chaque client, basé sur la
                collaboration et la confiance.
              </p>
            </div>
          </div>
        </div>
      </UContainer>
      <br >
      <UContainer class="my-12 bg-stratla-green rounded-md">
        <div class="flex flex-col gap-8 p-6">
          <!-- Premier div : h2 et p centrés, boutons côte à côte -->
          <div class="flex flex-col items-center gap-4">
            <h2 class="text-3xl font-bold text-[#FDBF3C] font-montserrat">
              Rejoignez le mouvement
            </h2>
            <p
              class="text-lg text-white  font-montserrat text-center max-w-2xl"
            >
              Strat.Lab votre partenaire en gestion de projet pour des solutions
              sur mesure durables et innovantes.
            </p>
            <div class="flex flex-row gap-4">
              <UButton
                label="Adhésion individuelle"
                color="text-[#FDBF3C] "
                variant="solid"
                
               class="bg-[#FDBF3C] text-white "
              />
              <UButton
                label="Adhésion à l'organisation"
                color="primary"
                variant="solid"
                
                class=" text-white"
              />
            </div>
          </div>
          <!-- Second div : deux UContainer côte à côte -->
          <div class="flex flex-row gap-8">
            <!-- Premier UContainer : Communauté -->
            <UContainer class="flex-1 bg-gray-50 rounded-md p-6">
              <h3
                class="text-xl font-semibold text-gray-900 font-montserrat mb-2"
              >
                Communauté
              </h3>
              <p class="text-base text-gray-700 font-montserrat">
                Nous accompagnons les organisations dans l’optimisation de leur
                performance à travers des missions d’audit organisationnel, de
                restructuration, de conseil en amélioration continue,
                d’optimisation des processus, des ressources humaines et
                matérielles, ainsi que des services additionnels tels que la
                gestion immobilière.
              </p>
            </UContainer>
            <!-- Second UContainer : Connection -->
            <UContainer class="flex-1 bg-gray-50 rounded-md p-6">
              <h3
                class="text-xl font-semibold text-gray-900 font-montserrat mb-2"
              >
                Connection
              </h3>
              <p class="text-base text-gray-700 font-montserrat">
                Nous aidons les organisations à renforcer leur efficacité en
                intervenant sur la structure, les processus et les ressources,
                grâce à des audits organisationnels, des conseils en
                amélioration continue, des optimisations ciblées, ainsi que des
                services complémentaires tels que la gestion immobilière.
              </p>
            </UContainer>
          </div>
        </div>
      </UContainer>

      <UContainer>
        <div class="flex flex-row gap-8">
          <UContainer class="flex-1 bg-gray-50 my-12 rounded-md p-6">
            <h3 class="text-xl font-semibold text-gray-900 font-montserrat mb-2">
              Expertise
            </h3>
            <p class="text-base text-gray-700 font-montserrat">
              Nous accompagnons les collectivités territoriales et les
              institutions publiques dans la conception et la mise en œuvre de
              projets de développement, en intervenant sur l’élaboration de plans
              communaux et territoriaux, l’évaluation des politiques publiques, la
              dynamique des acteurs et la structuration d’écosystèmes
              collaboratifs, ainsi que la réalisation d’études d’impact et le
              suivi-évaluation des projets.
            </p>
          </UContainer>
          <UContainer class="flex-1 bg-gray-50 rounded-md p-6 my-12">
            <h3 class="text-xl font-semibold text-gray-900 font-montserrat mb-2">
              Impact
            </h3>
            <p class="text-base text-gray-700 font-montserrat">
              Nous accompagnons les collectivités territoriales et les
              institutions publiques dans la conception et la mise en œuvre de
              projets de développement à fort impact, en élaborant des plans
              territoriaux stratégiques, en évaluant les politiques publiques, en
              facilitant la collaboration entre acteurs, et en mesurant les
              retombées sociales, économiques et environnementales grâce à des
              dispositifs rigoureux de suivi et d’évaluation.
            </p>
          </UContainer>
        </div>
      </UContainer>

      <div>
        <UContainer class="my-12 bg-white text-rounded-md">
          <div class="flex flex-row gap-8 items-center p-6">
            <!-- Côté gauche : image -->
            <div class="flex-1">
              <NuxtImg
                src="./cercle.png"
                alt="Stratlab Image"
                width="400"
                height="400"
                class="rounded-md"
              />
            </div>
            <!-- Côté droit : texte -->
            <div class="flex-1 flex-col gap-4">
              <h2 class="text-3xl font-bold text-[#FDBF3C] font-montserrat">
                Célèbrent l’Excellence Avec Strat.Lab
              </h2>
              <p class="text-lg text-gray-700 font-montserrat">
                Nous célébrons les individus et les organisations du monde
                entier dont l’impact positif améliore les lieux de travail,
                transforme les vies et contribue au progrès social mondial.
              </p>
            </div>
          </div>
        </UContainer>
      </div>
        <UContainer class="my-12 bg-stratlab-green rounded-md p-6">
        <div class="flex flex-col gap-12">
          <!-- Premier div : h3, span, et p centrés -->
          <div class="flex flex-col items-center gap-4">
            <h3 class="text-3xl font-bold text-white font-montserrat text-center">
              Apprendre + Grandir + Autonomiser
              <span class="text-[#FDBF3C] block mt-2">= STRAT.LAB Community</span>
            </h3>
            <p class="text-lg text-white font-montserrat text-center max-w-2xl">
              Analyse des résultats d’impact et recommandations d’amélioration de Conseil en Innovation et Développement Durable
            </p>
          </div>
          <!-- Deux UContainer : côte à côte -->
          <div class="flex flex-row flex-wrap gap-8">
            <!-- Premier UContainer : Intégrez un chapitre -->
            <UContainer class="flex-1 bg-white rounded-md p-6 min-w-[300px]">
              <div class="flex flex-col items-center gap-4">
                <NuxtImg
                  src="./cercle.png"
                  alt="Stratlab Image"
                  width="200"
                  height="200"
                  class="rounded-md"
                />
                <h3 class="text-xl font-semibold text-gray-900 font-montserrat text-center">
                  Intégrez un chapitre
                </h3>
                <p class="text-base text-gray-700 font-montserrat text-center">
                  Les antennes STRAT.LAB offrent bien plus que du réseautage. Vous développerez des liens étroits avec des habitants partageant les mêmes valeurs, déterminés à enrichir la vie de chacun.
                </p>
              </div>
            </UContainer>
            <!-- Second UContainer : Accès libre -->
            <UContainer class="flex-1 bg-white rounded-md p-6 min-w-[300px]">
              <div class="flex flex-col items-center gap-4">
                <NuxtImg
                  src="./cercle.png"
                  alt="Stratlab Image"
                  width="200"
                  height="200"
                  class="rounded-md"
                />
                <h3 class="text-xl font-semibold text-gray-900 font-montserrat text-center">
                  Accès libre, à tout moment
                </h3>
                <p class="text-base text-gray-700 font-montserrat text-center">
                  Imaginez pouvoir interagir avec des coachs du monde entier, à tout moment, où que vous soyez, du bout des doigts. Cette réalité vous attend sur STRAT.LAB.
                </p>
              </div>
            </UContainer>
          </div>
        </div>
      </UContainer>
    </main>
    <Footer/>

  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style scoped>
.bg-stratlab-green {
  background-color: #2e5e2d;
}
.bg-stratlabe-green {
  background-color: #ffffff;
}
.bg-stratla-green {
  background-color: #2e5e2d;
}
</style>
