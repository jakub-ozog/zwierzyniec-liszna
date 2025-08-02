<script setup>
definePageMeta({
  title: 'Mini Zoo - Kontakt'
})
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-center mb-8">Kontakt</h1>
    
    <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-green-600">Informacje kontaktowe</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold">Adres:</h3>
            <p class="text-gray-600">ul. Przykładowa 123<br>00-000 Miasto</p>
          </div>
          <div>
            <h3 class="font-semibold">Telefon:</h3>
            <p class="text-gray-600">+48 123 456 789</p>
          </div>
          <div>
            <h3 class="font-semibold">Email:</h3>
            <p class="text-gray-600">kontakt@minizoo.pl</p>
          </div>
          <div>
            <h3 class="font-semibold">Godziny otwarcia:</h3>
            <p class="text-gray-600">
              Pn-Pt: 9:00 - 17:00<br>
              So-Nd: 9:00 - 18:00
            </p>
          </div>
        </div>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-blue-600">Napisz do nas</h2>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Imię i nazwisko</label>
            <input type="text" class="w-full p-2 border border-gray-300 rounded-md">
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input type="email" class="w-full p-2 border border-gray-300 rounded-md">
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Wiadomość</label>
            <textarea class="w-full p-2 border border-gray-300 rounded-md h-32" />
          </div>
          <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
