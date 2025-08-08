<script setup>
import LatestArticle from "../components/LatestArticle.vue";
definePageMeta({
  title: 'Mini Zoo - Aktualności'
})
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-center mb-8">Aktualności</h1>
    <LatestArticle />
  </div>
</template>
