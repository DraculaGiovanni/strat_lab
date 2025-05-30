```vue
<template>
  <footer class="bg-stratlab-green text-white">
    <UContainer class="py-12 rounded-md">
      <div class="flex flex-col gap-12">
        <!-- Section principale : image à gauche, p à côté, nav à droite -->
        <div class="flex flex-col md:flex-row gap-8 items-start">
          <!-- Image et slogan -->
          <div class="flex flex-row items-center gap-4 ml-30">
            <NuxtImg
              src="./cercle.png"
              alt="Strat.Lab Logo"
              width="70"
              height="70"
              class="rounded-md"
            />
             <div class="flex flex-col gap-1">
              <span class="text-lg font-montserrat font-medium text-white">Cabinet d’analyse</span>
              <span class="text-lg font-montserrat font-medium text-white">Etudes</span>
              <span class="text-lg font-montserrat font-medium text-white">d’appui-conseils</span>
            </div>
          </div>
          <!-- Navigation, adresse, et icônes -->
          <div class="flex-1 flex flex-col md:flex-row gap-8 justify-between">
            <!-- Navigation -->
            <nav class="flex flex-row gap-4 ml-12">
              <NuxtLink
                to="/"
                class="text-white hover:text-stratlab-yellow font-montserrat text-base"
              >
                Accueil
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="text-white hover:text-stratlab-yellow font-montserrat text-base"
              >
                Qui sommes-nous
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="text-white hover:text-stratlab-yellow font-montserrat text-base"
              >
                Contact
              </NuxtLink>
             
            </nav>
            <!-- Adresse et icônes sociales -->
            <div class="flex flex-col gap-4">
              <p class="text-base font-montserrat text-white">
                Strat.Lab<br>
                123 Rue de l’Innovation<br>
                75001 Paris, France
              </p>
              <div class="flex flex-row gap-4">
                <NuxtLink to="https://facebook.com" target="_blank">
                  <UIcon
                    name="i-mdi-facebook"
                    class="text-[#FDBF3C] text-2xl"
                  />
                </NuxtLink>
                <NuxtLink to="https://youtube.com" target="_blank">
                  <UIcon
                    name="i-mdi-youtube"
                    class="text-[#FDBF3C]  text-2xl "
                  />
                </NuxtLink>
                <NuxtLink to="https://instagram.com" target="_blank">
                  <UIcon
                    name="i-mdi-instagram"
                    class="text-[#FDBF3C]  text-2xl "
                  />
                </NuxtLink>
                <NuxtLink to="https://linkedin.com" target="_blank">
                  <UIcon
                    name="i-mdi-linkedin"
                    class="text-[#FDBF3C]  text-2xl "
                  />
                </NuxtLink>
                <NuxtLink to="https://wa.me/1234567890" target="_blank">
                  <UIcon
                    name="i-mdi-whatsapp"
                    class="text-[#FDBF3C]  text-2xl "
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

      

        <!-- Copyright -->
        <p class="text-sm font-montserrat text-center text-white">
          © {{ currentYear }} Strat.Lab. Tous droits réservés.
        </p>
      </div>
    </UContainer>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
```