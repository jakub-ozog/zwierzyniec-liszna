<script setup>
import { useArticles } from "../../../composables/useArticles.js";

const articles = useArticles();
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <h1 class="text-3xl md:text-4xl font-bold mb-8 text-dark-text">
      Aktualności
    </h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <NuxtLink
        v-for="article in articles"
        :key="article.id"
        :to="`/aktualnosci/${article.slug}`"
        class="group border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
      >
        <NuxtImg
          :src="article.image"
          :alt="article.title"
          class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2 text-dark-text">
            {{ article.title }}
          </h2>
          <p class="text-gray-700">{{ article.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
