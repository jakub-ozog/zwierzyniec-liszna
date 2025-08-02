<script setup>
definePageMeta({
  title: 'Mini Zoo - Gady'
})
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-center mb-8">Gady</h1>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <span class="text-gray-500">Zdjęcie żółwia</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Żółwie lądowe</h3>
          <p class="text-gray-600">
            Spokojne i długowieczne żółwie, które można obserwować 
            podczas ich codziennych aktywności. Niektóre mają ponad 30 lat!
          </p>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <span class="text-gray-500">Zdjęcie gekona</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Gekony lamparcie</h3>
          <p class="text-gray-600">
            Piękne, kolorowe jaszczurki mieszkające w specjalnie 
            przygotowanych terrariach z odpowiednią temperaturą i wilgotnością.
          </p>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gray-200 flex items-center justify-center">
          <span class="text-gray-500">Zdjęcie agamy</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Agamy brodate</h3>
          <p class="text-gray-600">
            Spokojne jaszczurki z charakterystyczną "brodką". 
            Bardzo ciekawe i interaktywne zwierzęta.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
