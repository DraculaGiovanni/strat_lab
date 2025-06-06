<template>
  <header class="bg-gray-900 text-white p-4">
    <div class="container mx-auto">
      <!-- Titre en haut -->
      <h1 class="bg-stratla-green text-2xl text-white font-bold text-center mb-4">
        L’avenir s’éclaire avec Stratlab.
      </h1>
      
      <!-- Navigation -->
      <nav class="bg-white px-1.5 rounded-md">
    <ul class="flex justify-center space-x-6">
      <li class="flex flex-col items-center gap-2 px-3 py-1 bg-white text-gray-900 rounded-md">
        <div class="flex flex-row items-center gap-4 ml-30">
          <NuxtImg
            src="./cercle.png"
            alt="Strat.Lab Logo"
            width="100"
            height="90"
            class="rounded-md"
          />
          <div class="flex flex-col gap-1">
            <span class="text-lg font-montserrat font-medium text-black">Cabinet d’analyse</span>
            <span class="text-lg font-montserrat font-medium text-black">Etudes</span>
            <span class="text-lg font-montserrat font-medium text-black">d’appui-conseils</span>
          </div>
        </div>
      </li>
      <li class="px-3 py-1 bg-white font-montserrat text-base font-medium text-gray-900 rounded-md">
        <NuxtLink to="/" class="hover-border">Accueil</NuxtLink>
      </li>
      <li class="px-3 py-1 bg-white font-montserrat text-base font-medium text-gray-900 rounded-md">
        <NuxtLink to="/about" class="hover-border">Qui sommes-nous</NuxtLink>
      </li>
      <li class="px-3 py-1 bg-white font-montserrat text-base font-medium text-gray-900 rounded-md">
        <NuxtLink to="/contact" class="hover-border">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
header {
  background-color: #fff; /* Gris sombre pour le fond du header */
}

.bg-stratla-green {
  background-color: #2e5e2d;
}

.hover-border {
  position: relative;
  display: inline-block;
}

.hover-border::after {
  content: '';
  position: absolute;
  width: 0;
  height: 4px; /* Épaisseur du trait */
  bottom: -2px; /* Position du trait par rapport au texte */
  left: 0;
  background-color: #FFD700; /* Jaune doré */
  transition: width 0.3s ease; /* Animation pour l'effet de survol */
}

.hover-border:hover::after {
  width: 100%; /* Le trait s'étend sur toute la largeur du lien au survol */
}
</style>