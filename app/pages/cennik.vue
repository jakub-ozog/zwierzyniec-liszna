
<script setup>
import { CheckCircle } from 'lucide-vue-next'

const plans = [
  {
    name: "Starter",
    price: 19,
    description: "Get 20 AI-generated portraits with 2 unique styles and filters.",
    features: [
      "5 hours turnaround time",
      "20 AI portraits",
      "Choice of 2 styles",
      "Choice of 2 filters",
      "2 retouch credits",
    ],
    buttonText: "Get 20 portraits in 5 hours",
  },
  {
    name: "Advanced",
    price: 29,
    isRecommended: true,
    description: "Get 50 AI-generated portraits with 5 unique styles and filters.",
    features: [
      "3 hours turnaround time",
      "50 AI portraits",
      "Choice of 5 styles",
      "Choice of 5 filters",
      "5 retouch credits",
    ],
    buttonText: "Get 50 portraits in 3 hours",
    isPopular: true,
  },
  {
    name: "Premium",
    price: 49,
    description: "Get 100 AI-generated portraits with 10 unique styles and filters.",
    features: [
      "1-hour turnaround time",
      "100 AI portraits",
      "Choice of 10 styles",
      "Choice of 10 filters",
      "10 retouch credits",
    ],
    buttonText: "Get 100 portraits in 1 hour",
  },
]
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-12 px-6">
    <h1 class="text-5xl font-bold text-center tracking-tight">Cennik</h1>
    <div class="mt-12 max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div 
        v-for="plan in plans" 
        :key="plan.name" 
        class="border rounded-lg p-6 relative"
        :class="{ 'ring-2 ring-blue-500': plan.isPopular }"
      >
        <div v-if="plan.isPopular" class="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
        
        <h3 class="text-lg font-medium">{{ plan.name }}</h3>
        <p class="mt-2 text-4xl font-bold">${{ plan.price }}</p>
        <p class="mt-4 font-medium text-gray-600">
          {{ plan.description }}
        </p>
        
        <div class="my-4 border-t border-gray-200"></div>
        
        <ul class="space-y-2">
          <li 
            v-for="feature in plan.features" 
            :key="feature" 
            class="flex items-start gap-2"
          >
            <CheckCircle class="h-4 w-4 mt-1 text-green-600 flex-shrink-0" />
            <span>{{ feature }}</span>
          </li>
        </ul>
        
        <button
          :class="[
            'w-full mt-6 px-4 py-2 rounded-md font-medium transition-colors',
            plan.isPopular 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
          ]"
        >
          {{ plan.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Additional custom styles if needed */
</style>