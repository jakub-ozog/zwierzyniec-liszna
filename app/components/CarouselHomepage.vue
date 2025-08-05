<script setup>
import AutoScroll from "embla-carousel-auto-scroll";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Auto-scroll plugin for constant flow
const autoScrollPlugin = AutoScroll({
  speed: 1.5, // Constant slow speed
  startDelay: 0, // Start immediately
  stopOnInteraction: false, // Don't stop on user interaction
  stopOnMouseEnter: true, // Pause on hover
  stopOnFocusIn: false, // Don't stop on focus
});

const animalItems = [
  {
    path: "/images/carousel-1.webp",
    alt: "Carousel Image 1",
  },
  {
    path: "/images/carousel-2.webp",
    alt: "Carousel Image 2",
  },
  {
    path: "/images/carousel-3.webp",
    alt: "Carousel Image 3",
  },
  {
    path: "/images/carousel-4.webp",
    alt: "Carousel Image 4",
  },
  {
    path: "/images/carousel-5.webp",
    alt: "Carousel Image 5",
  },
  {
    path: "/images/carousel-6.webp",
    alt: "Carousel Image 6",
  },
];
</script>

<template>
  <Carousel
    class="relative w-full mx-auto cursor-grab"
    :plugins="[autoScrollPlugin]"
    :opts="{
      loop: true,
      align: 'start',
    }"
    @mouseenter="autoScrollPlugin.stop"
    @mouseleave="autoScrollPlugin.play"
  >
    <CarouselContent>
      <CarouselItem
        v-for="(item, index) in animalItems"
        :key="index"
        class="md:basis-1/2 lg:basis-1/3"
      >
        <div class="">
          <Card class="py-0">
            <CardContent
              class="flex aspect-square items-center justify-center p-0"
            >
              <NuxtImg
                :src="item.path"
                :alt="item.alt"
                class="object-cover w-full h-full rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="hidden" @click="autoScrollPlugin.reset" />
    <CarouselNext class="hidden" @click="autoScrollPlugin.reset" />
  </Carousel>
</template>
