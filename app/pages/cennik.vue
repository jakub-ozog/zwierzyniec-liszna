<script setup>
definePageMeta({
  title: 'Mini Zoo - Cennik'
})
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-center mb-8">Cennik</h1>
    
    <div class="max-w-4xl mx-auto">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md border">
          <h2 class="text-2xl font-semibold mb-4 text-green-600">Bilety wstępu</h2>
          <ul class="space-y-3">
            <li class="flex justify-between">
              <span>Dorosły</span>
              <span class="font-semibold">25 zł</span>
            </li>
            <li class="flex justify-between">
              <span>Dziecko (3-12 lat)</span>
              <span class="font-semibold">15 zł</span>
            </li>
            <li class="flex justify-between">
              <span>Senior (65+)</span>
              <span class="font-semibold">20 zł</span>
            </li>
            <li class="flex justify-between">
              <span>Rodzina (2+2)</span>
              <span class="font-semibold">70 zł</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md border">
          <h2 class="text-2xl font-semibold mb-4 text-blue-600">Karmienie zwierząt</h2>
          <ul class="space-y-3">
            <li class="flex justify-between">
              <span>Pokarm dla kóz</span>
              <span class="font-semibold">5 zł</span>
            </li>
            <li class="flex justify-between">
              <span>Pokarm dla królików</span>
              <span class="font-semibold">5 zł</span>
            </li>
            <li class="flex justify-between">
              <span>Pokarm dla kaczek</span>
              <span class="font-semibold">3 zł</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
