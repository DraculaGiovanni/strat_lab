<template>
  <div class="bg-white">
    <Header />
    <main>
      <div>
        <UContainer class="my-12 bg-stratla-green rounded-md p-6 text-black">
          <h1 class="text-4xl font-extrabold text-white text-center mb-4">
            Contact Us
          </h1>
          <p class="text-sm text-white text-center max-w-md mx-auto">
            Dans ce contexte dynamique, la création de Strat.Lab semble une
            opportunité pour répondre à la demande croissante de services
            d'analyse et de conseil stratégique. Le cabinet vise à accompagner
            les entreprises, les collectivités locales et les institutions
            publiques dans la définition et la mise en œuvre de stratégies
            adaptées aux défis contemporains.
          </p>
        </UContainer>
      </div>

      <div>
        <UContainer
          class="my-12 rounded-md p-6 text-black max-w-2xl mx-auto max-sm:max-w-full"
        >
          <div class="flex flex-row items-start gap-6 max-sm:flex-col">
            <!-- Image à gauche -->
            <div class="flex-shrink-0">
              <NuxtImg
                src="./cercle.png"
                alt="About Strat.lab"
                width="200"
                height="200"
                class="rounded-lg shadow-lg w-full h-auto max-w-[200px]"
              />
            </div>
            <!-- Textes à droite -->
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-black mb-4">
                De l'aide quand vous en avez besoin
              </h2>
              <p class="text-sm text-black">
                "Strat.Lab" est un cabinet d'analyses et d'études stratégiques
                spécialisé dans l'accompagnement des organisations publiques et
                privées à travers des services de conseil en planification, en
                évaluation et en développement. Notre mission est de fournir des
                solutions stratégiques personnalisées qui répondent aux défis
                contemporains des entreprises, des collectivités locales et des
                institutions. Fort de notre expertise, nous aidons nos clients à
                concevoir et à mettre en œuvre des stratégies innovantes pour
                une croissance durable et inclusive !
              </p>
            </div>
          </div>
        </UContainer>
      </div>

      <div>
        <UContainer class="my-12 bg-stratla-green rounded-md p-6 text-black">
          <h1 class="text-4xl font-extrabold text-white text-center mb-4">
            Vous avez une question relative à l'éthique ?
          </h1>
          <p class="text-sm text-white text-center mb-6">
            Vous vous couvrons également là-dessus
          </p>
          <div class="flex flex-row gap-6 max-sm:flex-col">
            <UContainer
              class="flex-1 bg-white rounded-md p-6 text-black my-9 mx-15"
            >
              <h3 class="text-xl font-semibold text-left mb-2">
                Assistance éthique
              </h3>
              <p class="text-sm">
                Engagement pour l'avenir : Nous mettons un point d'honneur à
                intégrer le développement durable et l'innovation dans toutes
                nos recommandations.
              </p>
            </UContainer>
            <UContainer
              class="flex-1 bg-white rounded-md p-6 text-black my-9 mx-15"
            >
              <h3 class="text-xl font-semibold text-left mb-2">
                Processus d'examen des plaintes éthiques
              </h3>
              <p class="text-sm">
                Nous menons des analyses ciblées des secteurs clés afin
                d'identifier les opportunités de développement, anticiper les
                évolutions du marché et mieux appréhender les défis
                stratégiques.
              </p>
            </UContainer>
          </div>
        </UContainer>
      </div>

      <div class="flex justify-center gap-8">
        <!-- Conteneurs individuels -->
        <UContainer
          class="flex flex-col items-center rounded-md p-4 text-white h-40 w-40 mx-auto border-t-4 border-b-4 border-blue-500"
        >
          <div class="flex flex-col items-center gap-2">
            <a
              href="https://www.youtube.com"
              target="_blank"
              aria-label="YouTube"
            >
              <Icon
                name="mdi:youtube"
                class="text-4xl text-red-500 hover:text-gray-300"
              />
            </a>
            <span class="text-center text-black text-xs break-words"
              >Rejoignez notre chaîne YouTube</span
            >
          </div>
        </UContainer>

        <UContainer
          class="flex flex-col items-center rounded-md p-4 text-white h-40 w-40 mx-auto border-t-4 border-b-4 border-blue-500"
        >
          <div class="flex flex-col items-center gap-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <Icon
                name="mdi:facebook"
                class="text-4xl text-blue-500 hover:text-gray-300"
              />
            </a>
            <span class="text-center text-black text-xs break-words"
              >Suivez-nous sur notre page Facebook</span
            >
          </div>
        </UContainer>

        <UContainer
          class="flex flex-col items-center rounded-md p-4 text-white h-40 w-40 mx-auto border-t-4 border-b-4 border-blue-500"
        >
          <div class="flex flex-col items-center gap-2">
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              aria-label="WhatsApp"
            >
              <Icon
                name="mdi:whatsapp"
                class="text-4xl text-green-500 hover:text-gray-300"
              />
            </a>
            <span class="text-center text-black text-xs break-words"
              >Contactez-nous via WhatsApp</span
            >
          </div>
        </UContainer>
      </div>

      <div>
        <UContainer class="my-12 bg-stratla-green rounded-md p-6 text-black">
          <div class="form-container">
            <h2 class="form-title">Contactez-nous</h2>
            <hr class="border-white" />
            <br />
            <form class="form">
              <div class="form-group">
                <label for="name">Nom</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  style="
                    border: 1px solid white;
                    background-color: white;
                    color: black;
                  "
                />
              </div>
              <div class="form-group">
                <label for="surname">Prénom</label>
                <input
                  type="text"
                  name="surname"
                  class="form-control"
                  style="
                    border: 1px solid white;
                    background-color: white;
                    color: black;
                  "
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  style="
                    border: 1px solid white;
                    background-color: white;
                    color: black;
                  "
                />
              </div>
              <div class="form-group">
                <label for="message">Veuillez laisser votre message ici</label>
                <textarea
                  id="message"
                  name="message"
                  class="form-control"
                  style="border: 1px solid white"
                ></textarea>
              </div>
              <button type="submit" class="submit-button">Envoyer</button>
            </form>
          </div>
        </UContainer>
      </div>

      
    </main>
  </div>
</template>

<style scoped>
.bg-stratla-green {
  background-color: #2e5e2d;
}
.bg-stratla-green {
  background-color: #2e5e2d;
}

.form-container {
  max-width: 500px;
  margin: auto;
}

.form-title {
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  width: 100%;
  height: auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: white;
}

.form-control {
  width: 100%;
  padding: 10px;
  background-color: #2e5e2d;
  color: white;
  border-radius: 3px;
  box-sizing: border-box;
}

.submit-button {
  background-color: white;
  color: #2e5e2d;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
}

.submit-button:hover {
  background-color: #f0f0f0;
}
</style>
