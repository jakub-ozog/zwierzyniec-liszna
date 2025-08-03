<script setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { Menu, Facebook, Instagram, CircleX } from "lucide-vue-next";

// const isDrawerOpen = ref(false);
const isMobileNavOpen = ref(false);

// Track dropdown states separately
const dropdownStates = reactive({
  "Zwierzęta": false
});

const links = [
  {
    name: "Strona główna",
    path: "/",
    icon: "material-symbols:home",
    label: "Strona główna",
  },
  {
    name: "O Zwierzyńcu",
    path: "/o-zwierzyncu",
    label: "O Zwierzyńcu",
  },
  {
    name: "Zwierzęta",
    label: "Zwierzęta",
    items: [
      {
        name: "Ptaki",
        path: "/zwierzeta/ptaki",
        label: "Ptaki",
      },
      {
        name: "Gady",
        path: "/zwierzeta/gady",
        label: "Gady",
      },
      {
        name: "Ssaki",
        path: "/zwierzeta/ssaki",
        label: "Ssaki",
      },
    ],
  },
  {
    name: "Cennik",
    path: "/cennik",
    label: "Cennik",
  },
  {
    name: "Aktualności",
    path: "/aktualnosci",
    label: "Aktualności",
  },
  {
    name: "Kontakt",
    path: "/kontakt",
    label: "Kontakt",
  },
];
</script>

<template>
  <nav class="flex items-center justify-between py-4 px-6 xl:px-12">
    <NuxtLink to="/">
      <NuxtImg
        src="/images/logo/logo-1.webp"
        alt="Logo"
      class="w-18 h-18 lg:w-28 lg:h-28" 
      />
    </NuxtLink>

    <!-- desktop navigation -->
    <ul class="gap-8 hidden lg:flex">
      <li v-for="link in links" :key="link.name" class="relative p-4">
        <!-- Dropdown for 'Zwierzęta' -->
        <template v-if="link.items && link.items.length">
          <DropdownMenu>
            <DropdownMenuTrigger
              class="cursor-pointer flex items-center gap-1 group"
            >
              {{ link.label }}
              <svg
                class="transition-transform duration-200 group-data-[state=open]:rotate-180"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="min-w-[220px]">
              <DropdownMenuItem
                v-for="item in link.items"
                :key="item.name"
                as-child
              >
                <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </template>
        <!-- Regular links -->
        <template v-else>
          <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
        </template>
      </li>
    </ul>

    <!-- mobile navigation -->

    <div class="block lg:hidden">
      <Drawer
        v-model:open="isMobileNavOpen"
        class="hidden lg:block"
        direction="right"
      >
        <DrawerTrigger as-child>
          <Button variant="outline">
            <Menu size="24" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div class="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <div class="flex items-center justify-between mb-4 mt-8">
                <NuxtImg
                  src="/images/logo/logo-1.webp"
                  alt="Logo"
                  class="w-12 h-12 opacity-25"
                />

                <DrawerClose as-child>
                  <CircleX class="cursor-pointer" />
                </DrawerClose>
              </div>
              <DrawerDescription>
                <ul class="flex flex-col text-right">
                  <li
                    v-for="link in links"
                    :key="link.name"
                    class="relative p-6 text-lg text-bold text-zinc-950 border-b border-zinc-100 last:border-b-0"
                  >
                    <template v-if="link.items && link.items.length">
                      <details
                        class=""
                        @toggle="(e) => (dropdownStates[link.name] = e.target.open)"
                      >
                        <summary
                          class="flex items-center cursor-pointer select-none text-right group justify-end"
                        >
                          {{ link.label }}
                          <svg
                            class="ml-1 transition-transform duration-200"
                            :class="{ 'rotate-180': dropdownStates[link.name] }"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </summary>
                        <ul class="pl-4 mt-2">
                          <li
                            v-for="item in link.items"
                            :key="item.name"
                            class="py-1"
                          >
                            <NuxtLink
                              :to="item.path"
                              @click="isMobileNavOpen = false"
                              >{{ item.label }}</NuxtLink
                            >
                          </li>
                        </ul>
                      </details>
                    </template>
                    <template v-else>
                      <NuxtLink
                        :to="link.path"
                        @click="isMobileNavOpen = false"
                        >{{ link.label }}</NuxtLink
                      >
                    </template>
                  </li>
                </ul>
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter class="">
              <div
                class="flex items-center flex-direction-row text-right justify-end gap-2"
              >
                <NuxtLink to="">
                  <Facebook class="w-6 h-8 cursor-pointer text-black mr-2" />
                </NuxtLink>
                <NuxtLink to="">
                  <Instagram class="w-6 h-8 cursor-pointer text-black" />
                </NuxtLink>
              </div>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  </nav>
</template>
