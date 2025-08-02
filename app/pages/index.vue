<script setup>
// HomePage component for the mini zoo
definePageMeta({
  title: 'Mini Zoo - Strona główna'
})
</script>

<template>
  <section class="relative min-h-screen">
    <NuxtImg src="/images/hero-image.jpg" alt="Mini Zoo Hero" class="absolute inset-0 w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
   
    <div class=" flex justify-between"></div>
    <div class="absolute bottom-12 z-10  text-white p-8 text-left">
      <h1 class="text-6xl text-white font-bold mb-4 drop-shadow-lg">Witamy w Mini Zoo!</h1>
      <p class="text-xl mb-8 drop-shadow-md">
        Odwiedź nasze urocze zwierzęta i spędź niezapomniane chwile wśród natury.
      </p>

    </div>
   
      
   
  </section>
</template>
    

