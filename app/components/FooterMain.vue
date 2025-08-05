<script setup>
import { Facebook, Youtube, Instagram } from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";
</script>

<template>
  <footer class="bg-white py-8 md:py-12 lg:py-16 mt-16">
    <div
      class="container text-center md:text-left mx-auto px-4 md:px-6 grid md:grid-cols-2"
    >
      <!-- Main footer grid -->

      <!-- Logo section - spans 2 columns on lg screens -->
      <div
        class="flex flex-col sm:max-w-sm text-center sm:mx-auto sm:text-center md:text-left md:mx-0 mb-8 md:mb-0"
      >
        <NuxtLink to="/" class="mb-4 mx-auto sm:mx-center mt-4 md:mx-0">
          <NuxtImg
            src="/images/logo/logo-1.webp"
            alt="Leśny Zwierzyniec Liszna Logo"
            class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
          />
        </NuxtLink>
        <p
          class="text-gray-400 font-light text-center sm:text-center md:text-left md:mx-0 sm:mx-0 max-w-xs mx-auto text-sm"
        >
          Leśny Zwierzyniec Liszna - miejsce gdzie natura spotyka się z pasją do
          zwierząt.
        </p>
      </div>

      <!-- Navigation links -->
      <div
        class="grid mt-8 grid-cols-1 sm:grid-cols-2 sm:text-center lg:grid-cols-4 gap-6"
      >
        <div class="text-center sm:center">
          <ul class="space-y-2">
            <h3 class="font-semibold text-dark-text mb-4">Nawigacja</h3>
            <li>
              <NuxtLink
                to="/"
                class="text-gray-600 hover:text-green-accent transition-colors"
              >
                Strona główna
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/cennik"
                class="text-gray-600 hover:text-green-accent transition-colors"
              >
                Cennik
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/kontakt"
                class="text-gray-600 hover:text-green-accent transition-colors"
              >
                Kontakt
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Content links -->

        <ul class="space-y-2">
          <h3 class="font-semibold text-dark-text mb-4">Odkryj</h3>
          <li>
            <NuxtLink
              to="/o-zwierzyncu"
              class="text-gray-600 hover:text-green-accent transition-colors"
            >
              O Zwierzyńcu
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/aktualnosci"
              class="text-gray-600 hover:text-green-accent transition-colors"
            >
              Aktualności
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/zwierzeta"
              class="text-gray-600 hover:text-green-accent transition-colors"
            >
              Zwierzęta
            </NuxtLink>
          </li>
        </ul>

        <!-- Social & Legal links -->

        <ul class="space-y-2 mb-4">
          <h3 class="font-semibold text-dark-text mb-4">Społeczność</h3>
          <li>
            <a
              href="https://www.instagram.com/lesnyzwierzyniec/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-green-accent transition-colors"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/lesnyzwierzyniec"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-green-accent transition-colors"
            >
              Facebook
            </a>
          </li>
        </ul>

        <ul class="space-y-1 text-sm">
          <h3 class="font-semibold text-dark-text mb-4 text-base">
            Informacje
          </h3>
          <li>
            <NuxtLink
              to="/polityka-prywatnosci"
              class="text-gray-500 hover:text-green-accent transition-colors"
            >
              Polityka prywatności
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/regulamin"
              class="text-gray-500 hover:text-green-accent transition-colors"
            >
              Regulamin
            </NuxtLink>
          </li>
        </ul>
      </div>
      
      
      
      <!-- Bottom section -->
      <!-- <div class="border-t border-gray-200 mt-8 pt-6">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
          >
          <p class="text-gray-500 text-sm text-center md:text-left">
            &copy; 2025 Leśny Zwierzyniec Liszna. Wszystkie prawa zastrzeżone.
          </p>
          <p class="text-gray-500 text-sm text-center md:text-right">
            Stworzone z ❤️ dla miłośników natury
          </p>
        </div>
      </div> -->
    </div>
    
    <Separator class="my-8" />
       <div
        class=" container flex flex-col sm:flex-row justify-around md:justify-between items-center gap-5 text-muted-foreground "
      >
        <div class="flex flex-col items-center sm:items-start justify-between ">
          <p class="text-gray-500 text-xs max-w-xs text-center sm:text-left">
            &copy; {{ new Date().getFullYear() }} Leśny Zwierzyniec Liszna. <br />
            
            Wszystkie prawa zastrzeżone.
          </p>
           <p class="text-gray-500 text-xs text-center md:text-right my-4">
            Stworzone z ❤️ do natury
          </p>
        </div>
        <div class="flex gap-2 justify-between">
          <NuxtLink to="#" target="_blank">
            <Youtube class="h-5 w-5" />
          </NuxtLink>
          <NuxtLink to="#" target="_blank">
            <Facebook class="h-5 w-5" />
          </NuxtLink>
          <NuxtLink to="#" target="_blank">
            <Instagram class="h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
  </footer>
</template>
