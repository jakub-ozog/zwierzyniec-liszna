<script setup></script>

<template>
  <footer class="bg-white py-8 md:py-12 lg:py-16 mt-16">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Main footer grid -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        
        <!-- Logo section - spans 2 columns on lg screens -->
        <div class="lg:col-span-2 flex flex-col items-center md:items-start">
          <NuxtLink to="/" class="mb-4">
            <NuxtImg
              src="/images/logo/logo-1.webp"
              alt="Leśny Zwierzyniec Liszna Logo"
              class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
            />
          </NuxtLink>
          <p class="text-gray-600 text-center md:text-left max-w-xs">
            Leśny Zwierzyniec Liszna - miejsce gdzie natura spotyka się z pasją do zwierząt.
          </p>
        </div>

        <!-- Navigation links -->
        <div class="text-center md:text-left">
          <h3 class="font-semibold text-dark-text mb-4">Nawigacja</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-gray-600 hover:text-green-accent transition-colors">
                Strona główna
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/o-zwierzyncu" class="text-gray-600 hover:text-green-accent transition-colors">
                O Zwierzyńcu
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/kontakt" class="text-gray-600 hover:text-green-accent transition-colors">
                Kontakt
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Content links -->
        <div class="text-center md:text-left">
          <h3 class="font-semibold text-dark-text mb-4">Odkryj</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/zwierzeta" class="text-gray-600 hover:text-green-accent transition-colors">
                Zwierzęta
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/aktualnosci" class="text-gray-600 hover:text-green-accent transition-colors">
                Aktualności
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cennik" class="text-gray-600 hover:text-green-accent transition-colors">
                Cennik
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social & Legal links -->
        <div class="text-center md:text-left">
          <h3 class="font-semibold text-dark-text mb-4">Społeczność</h3>
          <ul class="space-y-2 mb-4">
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
          
          <h4 class="font-medium text-dark-text mb-2 text-sm">Informacje</h4>
          <ul class="space-y-1 text-sm">
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
      </div>

      <!-- Bottom section -->
      <div class="border-t border-gray-200 mt-8 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm text-center md:text-left">
            &copy; 2025 Leśny Zwierzyniec Liszna. Wszystkie prawa zastrzeżone.
          </p>
          <p class="text-gray-500 text-sm text-center md:text-right">
            Stworzone z ❤️ dla miłośników natury
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
