<script setup>
import { useRoute } from 'vue-router';
import { useArticles } from '../../../composables/useArticles.js';

const route = useRoute();
const slug = route.params.slug;

const articles = useArticles();
const article = articles.find((a) => a.slug === slug);
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <div v-if="article">
      <h1 class="text-3xl font-bold mb-4">{{ article.title }}</h1>
      <NuxtImg :src="article.image" :alt="article.title" class="w-full h-auto mb-6 rounded" />

      <div class="prose max-w-none">
        <ContentRenderer :content="article.content" />
      </div>
    </div>

    <div v-else>
      <p class="text-red-600">Nie znaleziono artykułu.</p>
    </div>
  </section>
</template>
