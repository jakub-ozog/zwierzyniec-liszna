<script setup>
import Button from "~/components/ui/button/Button.vue";
import VideoHeader from "~/components/VideoHeader.vue";
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
        <div class="flex items-center mb-4 justify-between w-full">
          <h1
            class="text-4xl md:text-5xl lg:text-8xl text-white font-bold mb-4 drop-shadow-lg"
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
    <section class="container mx-auto mt-16">
      <div class="flex-col md:flex md:flex-row items-flex-start justify-between">
       
        <div class="text-left md:w-2/3 ">
          <h2
            class="text-xl md:text-2xl lg:text-4xl mb-4 text-green-950 font-semibold"
          >
            Witamy w Leśnym Zwierzyńcu Liszna
          </h2> 
          <p>
            – wyjątkowym miejscu, gdzie natura spotyka się z pasją do zwierząt,
            a edukacja przeplata się z beztroską zabawą. Położony w malowniczej
            Bieszczadach, w sercu urokliwej miejscowości Liszna, nasz
            zwierzyniec to idealne miejsce na niezapomnianą przygodę dla całej
            rodziny.
          </p>
          <h3 class="text-lg md:text-xl lg:text-2xl mb-4 mt-6 text-green-950 font-semibold">Nasza misja: bliskość z naturą i szacunek do życia</h3>
          <p>
            W Leśnym Zwierzyńcu wierzymy, że najlepszy sposób na zrozumienie i
            pokochanie natury to obcowanie z nią na co dzień. Stworzyliśmy
            przestrzeń, w której możesz z bliska poznać fascynujące gatunki
            zwierząt – zarówno te typowe dla bieszczadzkich lasów, jak i
            egzotycznych gości z odległych zakątków świata. Dbamy o to, aby nasi
            podopieczni mieli zapewnione najlepsze warunki, a Ty – możliwość
            obserwacji ich w środowisku jak najbardziej zbliżonym do
            naturalnego.
          </p>
          <h3>Co Czeka na Odwiedzających?</h3>
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
          class="max-w-[400px] object-cover rounded-lg mb-8"
        />
      </div>
    </section>
  </div>
</template>
