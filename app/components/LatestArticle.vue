<script setup>
import { useArticles } from "../../composables/useArticles.js";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-vue-next";

const articles = useArticles();
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
          <NuxtLink :to="`/aktualnosci/${article.slug}`" class="w-full">
            <Button variant="ghost" class="w-full text-muted-foreground cursor-pointer mt-2">
              <ChevronRight /> <span class="">Czytaj więcej</span>
            </Button>
          </NuxtLink>
        </CardFooter>
      </Card>
    </div>
  </div>
  <div class="flex text-center mx-auto items-center justify-center container w-full mt-6">
    <NuxtLink to="/aktualnosci" class="w-full">
      <Button variant="ghost"
        class="w-full sm:max-w-sm text-orange-accent pt-2 pb-2 gap-0 justify-self-center cursor-pointer underline underline-offset-5">
        Przejdź do artykułów
      </Button>
    </NuxtLink>
  </div>
</template>
