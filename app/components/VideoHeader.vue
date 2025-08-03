<template>
  <div class="relative w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center text-white">

    <video
      autoplay
      loop
      muted
      playsinline
      :poster="desktopPoster"
      class="absolute top-0 left-0 w-full h-full object-cover  hidden sm:block"
    >
      <source :src="desktopWebmSrc" type="video/webm">
      <!-- <source :src="desktopMp4Src" type="video/mp4"> -->
      Twoja przeglądarka nie obsługuje tagu wideo.
    </video>

    <video
      autoplay
      loop
      muted
      playsinline
      :poster="mobilePoster"
      class="absolute top-0 left-0 w-full h-full object-cover  block sm:hidden"
    >
      <source :src="mobileWebmSrc" type="video/webm">
      <!-- <source :src="mobileMp4Src" type="video/mp4"> -->
      Twoja przeglądarka nie obsługuje tagu wideo.
    </video>

    <div
      class="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-2] block sm:hidden"
      :style="{ backgroundImage: `url(${mobilePoster})` }"
    ></div>
     <div
      class="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-2] hidden sm:block"
      :style="{ backgroundImage: `url(${desktopPoster})` }"
    ></div>

    </div>
</template>

<script setup>
// Definiowanie ścieżek do wideo i posterów
// Załóżmy, że pliki są w folderze /public w Nuxt

const desktopWebmSrc = '/videos/desktop-video.webm';
// const desktopMp4Src = '/videos/desktop-video.mp4';
const desktopPoster = '/images/desktop-poster.png'; // Obraz desktopowy, np. 1920x1080 (16:9)

const mobileWebmSrc = '/videos/mobile-video.webm';
const mobilePoster = '/images/mobile-poster.png'; // Obraz mobilny, np. 1280x720 (16:9)
// const mobileMp4Src = '/videos/mobile-video.mp4';

// Cała logika 'isMobile' i nasłuchiwania na resize została usunięta,
// ponieważ Tailwind zajmuje się tym za pomocą klas CSS.
</script>