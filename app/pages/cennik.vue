<script setup>
import Badge from "~/components/ui/badge/Badge.vue";
import Card from "~/components/ui/card/Card.vue";
const features = [
  {
    title: "Dzieci do lat 3",
    description:
      "Bezpłatnie",
    img: "/images/icons/children.png",
  },
  {
    title: "Dzieci 3-17 lat",
    description:
      "20zł",
    img: "/images/icons/teenagers.png",
  },
  {
    title: "Emeryci oraz renciści",
    description:
      "20zł",
    img: "/images/icons/old_friends.png",
  },
  {
    title: "Dorośli",
    description:
      "25zł",
    img: "/images/icons/family.png",
  },
  {
    title: "Grupy zorganizowane",
    description:
      "Oferta indywidualna",
    img: "/images/icons/teamwork.png",
  },
];

</script>

<template>
  <section class="pb-20 pt-20 md:pb-32 md:pt-32 container mx-auto">
    <div class="text-center space-y-4 pb-16 mx-auto max-w-4xl">
      <Badge class="bg-orange-accent">Cennik</Badge>
      <h2 class="mx-auto mt-4 text-3xl font-bold sm:text-5xl tracking-tight">
        Sprawdź nasz cennik
      </h2>
      <p class="text-lg text-muted-foreground pt-1">
        Odkryj magiczny świat zwierząt w przystępnej cenie. Poznaj opcje biletów oraz sprawdź ofertę indywidualną.
      </p>
    </div>

    <Card
      class="flex flex-col sm:grid divide-x divide-y overflow-hidden rounded-3xl border border-card-100  sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 lg:divide-y-0 ">
      <template v-for="(feature, index) in features" :key="index">
        <div
          class="group relative transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
          :class="index === 4 ? 'col-span-2 lg:col-span-4 xl:col-auto' : ''"
        >
          <div class="relative space-y-8 py-12 p-8">
            <img :src="feature.img" :alt="feature.title" class="w-18 mx-auto" width="512" height="512">
            <div class="space-y-2 mx-auto text-center">
              <h5 class="text-base text-muted-foreground font-normal transition group-hover:text-primary">
                {{ feature.title }}
              </h5>
              <p class=" text-2xl text-orange-accent font-bold">{{ feature.description }}</p>
            </div>
            <!-- <a href="#" class="flex items-center justify-between group-hover:text-primary">
              <span class="text-sm">Read more</span>
              <ArrowRight
                class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </a> -->
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>


<style scoped>
/* Additional custom styles if needed */
</style>