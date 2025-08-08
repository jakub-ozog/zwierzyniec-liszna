<script setup>
import { ref } from "vue";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-vue-next";

const articles = ref([
  {
    id: 1,
    title: "Nowe zwierzęta w zoo!",
    description: "Z radością informujemy, że do naszej rodziny dołączyły nowe zwierzęta. Przybyły do nas młode kozy karłowate oraz para królików miniaturowych.",
    image: "/images/articles/article-1-thumb.webp",
  },
  {
    id: 2,
    title: "Wakacyjne warsztaty dla dzieci",
    description: "Zapraszamy na wakacyjne warsztaty edukacyjne dla dzieci. Program obejmuje poznawanie zwierząt, karmienie i opiekę nad nimi.",
    image: "/images/articles/article-2-thumb.webp",
  },
  {
    id: 3,
    title: "Modernizacja wybiegów",
    description: "Zakończyliśmy modernizację wybiegów dla naszych zwierząt. Wszystkie przestrzenie zostały rozszerzone i wyposażone w nowe elementy",
    image: "/images/articles/article-3-thumb.webp",
  },
]);
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-3">
    <div 
    v-for="(article, index) in articles" :key="article.id" :class="[
      'text-center items-center gap-6 mx-auto',
      index === 2 ? ' sm:col-span-2 lg:col-auto  sm:justify-self-center md:justify-self-auto' : '',
    ]">
      <Card class="w-full max-w-sm sm:max-w-sm shadow-none pt-0 pb-2 gap-0">
        <CardHeader class="flex flex-row items-center justify-center md:justify-between py-0">
          <div class="flex items-center gap-3 pt-3 pb-3">
            <NuxtImg src="https://github.com/shadcn.png" class="h-6 w-6 rounded-full bg-secondary object-contain" alt=""
              height="24" width="24" />
            <div class="flex flex-col gap-0.5">
              <h6 class="text-xs leading-none font-medium">
                Leśny Zwierzyniec
              </h6>
              <!-- <span class="text-xs">@shadcn</span> -->
            </div>
          </div>
        </CardHeader>
        <CardContent class="p-0">
          <!-- <div class="relative aspect-video bg-muted border-y" /> -->
          <NuxtImg :src="article.image" alt="Article Image" class="w-full h-48 object-cover aspect-video relative" />

          <div class="pt-3 pb-4 px-6">
            <h2 class="font-semibold">{{ article.title }}</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              🌄
              <!-- <span class="text-blue-500">#Wanderlust</span>
              <span class="text-blue-500">#NatureLovers</span> -->
              {{ article.description }}
            </p>
          </div>
        </CardContent>
        <Separator />
        <CardFooter class="flex">
          <Button variant="ghost" class="w-full text-muted-foreground cursor-pointer mt-2">
            <ChevronRight /> <span class="">Czytaj więcej</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
  <div class="flex text-center mx-auto items-center justify-center container w-full mt-6">
    <Button 
    variant="ghost"
      class="w-full sm:max-w-sm text-orange-accent pt-2 pb-2 gap-0 justify-self-center cursor-pointer underline underline-offset-5">
      <NuxtLink to="/aktualnosci">
        Przejdź do artykułów
      </NuxtLink>
    </Button>
  </div>
</template>
