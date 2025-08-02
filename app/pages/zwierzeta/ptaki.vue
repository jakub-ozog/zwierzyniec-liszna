<script setup>
definePageMeta({
  title: 'Mini Zoo - Ptaki'
})
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-center mb-8">Ptaki</h1>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <span class="text-gray-500">Zdjęcie kaczki</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Kaczki krzyżówki</h3>
          <p class="text-gray-600">
            Nasze kaczki mieszkają przy małym oczku wodnym. 
            Można je karmić specjalnym pokarmem bezpiecznym dla ptaków wodnych.
          </p>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <span class="text-gray-500">Zdjęcie kurczaka</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Kurczaki ozdobne</h3>
          <p class="text-gray-600">
            Kolorowe kurczaki różnych ras ozdobnych. 
            Można obserwować ich naturalne zachowania i słuchać kogucich pieśni.
          </p>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <span class="text-gray-500">Zdjęcie gęsi</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Gęsi domowe</h3>
          <p class="text-gray-600">
            Duże, majestatyczne ptaki które są strażnikami naszego zoo. 
            Bardzo inteligentne i społeczne zwierzęta.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
