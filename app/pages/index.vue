<script setup>
import VideoHeader from "~/components/VideoHeader.vue";
// HomePage component for the mini zoo
definePageMeta({
  title: "Leśny Zwierzyniec Liszna - Strona główna",
});
</script>

<template>
  <div>
    <div class="relative min-h-screen">
      <!-- <NuxtImg
        src="/images/hero-image.jpg"
        alt="Mini Zoo Hero"
        class="absolute inset-0 w-full h-full object-cover"
      /> -->

      <VideoHeader />

      <div class="absolute inset-0 bg-black opacity-50"></div>

      <div class="absolute bottom-12 z-10 text-white p-8 text-left">
        <h1
          class="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-4 drop-shadow-lg"
        >
          Leśny Zwierzyniec Liszna
        </h1>
        <p class="text-xl mb-8 drop-shadow-md">
          Odwiedź nasze urocze zwierzęta i spędź niezapomniane chwile wśród
          natury.
        </p>
      </div>
    </div>
  </div>
</template>
