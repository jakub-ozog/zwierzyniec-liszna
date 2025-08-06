<script setup>
definePageMeta({
  title: 'Mini Zoo - Kontakt'
})

import ContactMap from '~/components/ContactMap.vue';
import { CircleCheckBig } from 'lucide-vue-next';
import Separator from '~/components/ui/separator/Separator.vue';
import Badge from '~/components/ui/badge/Badge.vue';
import { MapPin } from 'lucide-vue-next';
import { Phone } from 'lucide-vue-next';
import { Clock4 } from 'lucide-vue-next';
</script>

<template>
  <section class="container mx-auto py-20 flex flex-col md:flex-row items-start justify-between">
    <div class="text-center md:text-left space-y-4 pb-16 mx-auto md:mx-0 max-w-4xl">
      <Badge class="bg-orange-accent">Kontakt</Badge>
      <h1 class="text-3xl font-bold sm:text-5xl tracking-tight">
        Skontaktuj się z nami
      </h1>
      <p class="text-lg text-muted-foreground pt-1 mb-6">
        Masz pytania?  Chętnie na nie odpowiemy!
      </p>
      <Separator class="my-4" />

      <div class="flex flex-col   justify-start md:justify-start gap-2">
        <div>
          <MapPin class="inline-block mr-2 w-4" />
          <span class="align-middle  text-dark-text font-semibold">Liszna 5, 38-607 Liszna</span>
        </div>
        <div>
          <Phone class="inline-block mr-2 w-4" />
          <span class="align-middle text-dark-text font-semibold"><a href="tel:+48 663 726 175">+48 663 726 175</a></span>
        </div>
        <div>
          <Clock4 class="inline-block mr-2 w-4" />
          <span class="align-middle text-dark-text font-semibold">Pon-Nd: 10:00 - 17:00</span>
        </div>
      </div>
    </div>

    <div>
      <ContactMap />
    </div>

  </section>
</template>
