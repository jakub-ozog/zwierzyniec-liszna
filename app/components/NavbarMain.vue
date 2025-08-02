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
import { Menu } from "lucide-vue-next";

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
  <nav class=" flex items-center justify-between py-4 px-6 xl:px-12">
    <NuxtLink to="/">
      <NuxtImg
        src="/images/logo/logo-1.webp"
        alt="Logo"
        width="90"
        height="90"
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
      <Drawer class="hidden lg:block" direction="right">
        <DrawerTrigger as-child>
          <Button variant="outline">
            <Menu size="24" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div class="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription
                >Set your daily activity goal.</DrawerDescription
              >
            </DrawerHeader>

            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose as-child>
                <!-- <Button variant="outline">
              Cancel
            </Button> -->
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  </nav>
</template>
