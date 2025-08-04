<script setup>
import Button from "~/components/ui/button/Button.vue";
import VideoHeader from "~/components/VideoHeader.vue";
import CardHomepage from "~/components/CardHomepage.vue";
import CarouselHomepage from "~/components/CarouselHomepage.vue";
// HomePage component for the mini zoo
definePageMeta({
  title: "Leśny Zwierzyniec Liszna - Strona główna",
});
</script>

<template>
  <div>
    <section class="relative min-h-screen">
      <!-- <NuxtImg
        src="/images/hero-image.jpg"
        alt="Mini Zoo Hero"
        class="absolute inset-0 w-full h-full object-cover"
      /> -->

      <VideoHeader />

      <div class="absolute inset-0 bg-black opacity-50"></div>

      <div class="absolute bottom-8 z-10 text-white p-8 w-full">
        <div
          class="flex flex-col md:flex-row items-start md:items-center mb-4 justify-between w-full"
        >
          <h1
            class="text-5xl lg:text-8xl text-white font-bold mb-4 drop-shadow-lg"
          >
            Leśny Zwierzyniec <br />
            Liszna
          </h1>
          <div>
            <p class="text-xl mb-8 drop-shadow-md">
              Odwiedź nasze urocze zwierzęta <br />i spędź niezapomniane chwile
              wśród natury.
            </p>
            <Button
              variant="outline"
              class="text-white hover:bg-transparent bg-transparent border-2 border-white hover:text-white cursor-pointer p-6 rounded-none"
            >
              Zobacz więcej
            </Button>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto mt-24 px-8 lg:p-0">
      <div class="flex-col flex xl:flex-row items-flex-start justify-between">
        <div class="text-left w-full xl:w-2/4">
          <div class="bg-orange-accent text-center lg:text-left rounded-lg p-4">
            <h2
            class="text-2xl lg:text-4xl mb-4 text-dark-text font-semibold text-white  "
            >
            Witamy w Leśnym Zwierzyńcu Liszna
          </h2>
          <p class="text-white ">
            – wyjątkowym miejscu, gdzie natura spotyka się z pasją do zwierząt,
            a edukacja przeplata się z beztroską zabawą. Położony w malowniczej
            Bieszczadach, w sercu urokliwej miejscowości Liszna, nasz
            zwierzyniec to idealne miejsce na niezapomnianą przygodę dla całej
            rodziny.
          </p>
        </div>
          <h3
            class="text-lg md:text-xl lg:text-2xl mb-4 mt-12 text-dark-text font-medium"
          >
            Nasza misja: bliskość z naturą i szacunek do życia
          </h3>
          <p class="text-dark-text">
            W Leśnym Zwierzyńcu wierzymy, że najlepszy sposób na zrozumienie i
            pokochanie natury to obcowanie z nią na co dzień. Stworzyliśmy
            przestrzeń, w której możesz z bliska poznać fascynujące gatunki
            zwierząt – zarówno te typowe dla bieszczadzkich lasów, jak i
            egzotycznych gości z odległych zakątków świata. Dbamy o to, aby nasi
            podopieczni mieli zapewnione najlepsze warunki, a Ty – możliwość
            obserwacji ich w środowisku jak najbardziej zbliżonym do
            naturalnego.
          </p>
          <h3
            class="text-lg md:text-xl lg:text-2xl mb-4 mt-12 text-dark-text font-medium"
          >
            Co Czeka na Odwiedzających?
          </h3>
          <p>
            Przygotuj się na spotkania, które zostaną w pamięci na długo!
            Podczas spaceru po Zwierzyńcu odkryjesz między innymi:
          </p>
          <ul class="list-disc pl-6 mb-4">
            <li>
              <strong>Puchate alpaki</strong> – gotowe na wspólne selfie i
              delikatne głaskanie.
            </li>
            <li>
              <strong>Dostojne daniele i jelenie</strong> – majestatyczne
              mieszkańce lasów, których elegancja zachwyca.
            </li>
            <li>
              <strong>Psotne kozy i owce</strong> – zawsze chętne na odrobinę
              uwagi.
            </li>
            <li>
              <strong>Kolorowe ptaki</strong> – śpiewające i latające w
              wolierach, pełne życia i barw.
            </li>
            <!-- (Opcjonalnie: dodaj kilka konkretnych gatunków, które masz i chcesz wyróżnić, np. "ciekawskie surykatki", "egzotyczne papugi", "dziki" itp.) -->
          </ul>
        </div>
        <NuxtImg
          src="/images/owl.webp"
          alt="Sowa na drzewie"
          class="max-w-[490px] w-full shadow-2xl mx-auto xl:m-0 object-cover rounded-lg mb-8 hover:scale-105 transition-transform duration-400"
        />
      </div>
    </section>
    <section class="container mx-auto mt-24 px-8 lg:p-0">
      <h2
        class="text-xl md:text-2xl lg:text-4xl text-dark-text font-semibold mb-6"
      >
        Zanim do nas przyjedziesz
      </h2>

      <CardHomepage />
    </section>

    <section class="container mx-auto mt-24 p-8 lg:p-0">
       <h2
        class="text-xl md:text-2xl lg:text-4xl text-dark-text font-semibold mb-6"
      >
        Zobacz nas na Instagramie
      </h2>

      <CarouselHomepage />
    </section>
  </div>
</template>
