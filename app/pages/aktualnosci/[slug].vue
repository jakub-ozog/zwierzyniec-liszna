<script setup>
// Automatyczne pobieranie zawartości na podstawie sluga z URL
// `doc` zawiera metadane (frontmatter) i treść pliku Markdown
const { data: doc } = await useAsyncData(route.path, () => {
  return queryContent('blog', route.params.slug).findOne()
})
</script>

<template>
  <div class="container mx-auto p-8">
    <template v-if="doc">
      <h1 class="text-4xl font-bold mb-4">{{ doc.title }}</h1>
      
      <ContentRenderer :value="doc" class="prose max-w-none" />
    </template>
    
    <template v-else>
      <p>Przepraszamy, ten post nie został znaleziony.</p>
    </template>
  </div>
</template>