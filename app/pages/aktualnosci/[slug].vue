<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const { data: article } = await useAsyncData('article', () =>
  queryContent('/aktualnosci')
    .where({ slug: route.params.slug })
    .findOne()
)
</script>

<template>
  <div class="container mx-auto p-8">
    <template v-if="article">
      <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>

      <ContentRenderer :value="article" class="prose max-w-none" />
    </template>

    <template v-else>
      <p>Przepraszamy, ten post nie został znaleziony.</p>
    </template>
  </div>
</template>