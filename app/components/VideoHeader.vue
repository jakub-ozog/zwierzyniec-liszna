<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Definiowanie ścieżek do wideo i posterów
// Załóżmy, że pliki są w folderze /public w Nuxt
const desktopWebmSrc = '/videos/desktop-video.webm';
const desktopMp4Src = '/videos/desktop-video.mp4';
const desktopPoster = '/images/desktop-poster.webp'; // Obraz desktopowy, np. 1920x1080 (16:9)

const mobileWebmSrc = '/videos/mobile-video.webm';
const mobileMp4Src = '/videos/mobile-video.mp4';
const mobilePoster = '/images/mobile-poster.webp'; // Obraz mobilny, np. 1280x720 (16:9)

// Reaktywna zmienna do określania, czy urządzenie jest mobilne
const isMobile = ref(false);

// Próg szerokości ekranu, poniżej którego uznajemy urządzenie za mobilne
// Domyślne breakpointy Tailwinda często używają 'md' jako 768px
const mobileBreakpoint = 768;

const checkMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth <= mobileBreakpoint;
  }
};

onMounted(() => {
  checkMobile();
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', checkMobile);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', checkMobile);
  }
});
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center text-white">
    <video
      v-if="!isMobile"
      autoplay
      loop
      muted
      playsinline
      :poster="desktopPoster"
      class="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source :src="desktopWebmSrc" type="video/webm">
      <source :src="desktopMp4Src" type="video/mp4">
      Twoja przeglądarka nie obsługuje tagu wideo.
    </video>

    <video
      v-else
      autoplay
      loop
      muted
      playsinline
      :poster="mobilePoster"
      class="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source :src="mobileWebmSrc" type="video/webm">
      <source :src="mobileMp4Src" type="video/mp4">
      Twoja przeglądarka nie obsługuje tagu wideo.
    </video>

    <div
      class="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-2]"
      :style="{ backgroundImage: `url(${isMobile ? mobilePoster : desktopPoster})` }"
    ></div>

    </div>
</template>

