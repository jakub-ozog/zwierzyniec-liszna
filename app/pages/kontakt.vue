<script setup>
import Separator from '~/components/ui/separator/Separator.vue';
import Badge from '~/components/ui/badge/Badge.vue';
import { MapPin, Clock4, Phone } from 'lucide-vue-next';

definePageMeta({
  title: 'Mini Zoo - Kontakt'
})

// import { CircleCheckBig } from 'lucide-vue-next';
</script>

<template>
  <section class="container mx-auto py-20 flex flex-col lg:flex-row items-start justify-between lg:gap-8">
    <div class="text-center md:text-left space-y-4 pb-16 mx-auto md:mx-0 max-w-4xl">
      <Badge class="bg-orange-accent">Kontakt</Badge>
      <h1 class="text-3xl font-bold sm:text-5xl tracking-tight">
        Skontaktuj się z nami
      </h1>
      <p class="text-lg text-muted-foreground pt-1 mb-6">
        Masz pytania? Chętnie na nie odpowiemy!
      </p>
      <Separator class="my-4" />

      <div class="flex flex-col   justify-start md:justify-start gap-2">
        <div>
          <MapPin class="inline-block mr-2 w-4" />
          <span class="align-middle  text-dark-text font-semibold">Liszna 5, 38-607 Liszna</span>
        </div>
        <div>
          <Phone class="inline-block mr-2 w-4" />
          <span class="align-middle text-dark-text font-semibold"><a href="tel:+48 663 726 175">+48 663 726
              175</a></span>
        </div>
        <div>
          <Clock4 class="inline-block mr-2 w-4" />
          <span class="align-middle text-dark-text font-semibold">Pon-Nd: 10:00 - 17:00</span>
        </div>
      </div>
    </div>

    <div class="w-full lg:max-w-3xl">

        <iframe class="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.4889309054192!2d22.30453757677116!3d49.19128377722175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473bfdd0a906eb5d%3A0x4ff34f7489dcf932!2sLe%C5%9Bny%20Zwierzyniec%20w%20Lisznej!5e0!3m2!1spl!2spl!4v1754487155200!5m2!1spl!2spl"
          width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      
    </div>

  </section>
</template>
