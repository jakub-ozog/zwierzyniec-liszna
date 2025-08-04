<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CloudSun, MapPin, Backpack } from 'lucide-vue-next';

// Icons mapping for dynamic component rendering
const icons = {
  'cloud-sun': CloudSun,
  'map-pin': MapPin,
  'backpack': Backpack
};

const cards = [
  {
    title: "Kiedy przyjechać?",
    description:
      "W Leśnym Zwierzyńcu Liszna jesteśmy otwarci przez cały rok, 7 dni w tygodniu. Wiosna i lato to idealny czas na wizytę, kiedy zwierzęta są najbardziej aktywne i można je zobaczyć w pełnej krasie. Jesień i zima oferują spokojniejszą atmosferę, idealną do obserwacji zwierząt w ich naturalnym środowisku.",
    icon: "cloud-sun",
  },
  {
    title: "Jak do nas trafić?",
    description:
      "Zwierzyńce znajduje się w malowniczej miejscowości Liszna, w sercu Bieszczad. Dojazd jest możliwy zarówno samochodem, jak i komunikacją publiczną. Oferujemy również możliwość zorganizowania transportu z pobliskich miejscowości.",
    icon: "map-pin",
  },
  {
    title: "Co zabrać ze sobą?",
    description:
      "Zalecamy zabranie wygodnego obuwia, aby móc swobodnie poruszać się po terenie zwierzyńca. Warto również mieć ze sobą aparat fotograficzny, aby uwiecznić niezapomniane chwile z naszymi zwierzętami.",
    icon: "backpack",
  },
];
</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">

    <Card
      v-for="(card, index) in cards"
      :key="index"
      class="shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        <component
        :is="icons[card.icon]"
          v-if="card.icon"
          class="mb-2 h-8 w-8 stroke-green-accent"
        />
        <CardTitle class="text-2xl font-medium mt-4">{{ card.title }}</CardTitle>
        <CardDescription class="leading-[20px] text-dark-text text-base mt-4">{{ card.description }}</CardDescription>
      </CardHeader>
      <!-- <CardFooter> Card Footer </CardFooter> -->
    </Card> 
  </div>
  
</template>
