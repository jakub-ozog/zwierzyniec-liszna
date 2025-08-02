<script setup>
definePageMeta({
  title: 'Mini Zoo - Ssaki'
})
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-center mb-8">Ssaki</h1>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <span class="text-gray-500">Zdjęcie kozy</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Kozy karłowate</h3>
          <p class="text-gray-600">
            Przyjazne i łagodne zwierzęta, które uwielbiają kontakt z ludźmi. 
            Można je karmić specjalnym pokarmem dostępnym w zoo.
          </p>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <span class="text-gray-500">Zdjęcie królika</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Króliki miniaturowe</h3>
          <p class="text-gray-600">
            Małe, puszyste króliki różnych ras. Bardzo spokojne i przyjazne, 
            idealne do pierwszego kontaktu dzieci ze zwierzętami.
          </p>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <span class="text-gray-500">Zdjęcie świnki morskiej</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Świnki morskie</h3>
          <p class="text-gray-600">
            Małe gryzonie znane ze swoich charakterystycznych dźwięków. 
            Bardzo społeczne i ciekawe świata zwierzęta.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
