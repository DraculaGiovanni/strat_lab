```vue
<template>
  <div>
    <!-- Appel du composant Header -->
    <Header />

    <!-- Contenu principal -->
    <main>
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
              </h1>
               </UContainer
            >>
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
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.bg-stratla-green {
  background-color: #2e5e2d;
}
</style>
```
