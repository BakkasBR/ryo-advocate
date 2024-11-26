<template>
  <aside class="w-64 bg-neutral-950 text-white h-screen flex flex-col">
    <!-- Logo Section -->
    <div class="pt-4 flex justify-center items-center space-x-4">
      <img src="@/assets/img/app-logo.png" class="h-28 w-36" alt="app-logo">
    </div>

    <!-- Navigation Menu --> 
    <Menu :model="menuItems" class="bg-neutral-950 border-0 rounded-none p-4">
      <template #item="{ item }">
        <div class="p-menuitem px-4 py-2 flex items-center space-x-3 text-sm">
          <span class="h-5 w-5">
            <img :src="item.customIcon" alt="icon" class="h-full w-full object-contain" />
          </span>
          <span>{{ item.label }}</span>
        </div>
      </template>
    </Menu>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import Menu from "primevue/menu";

const menuItems = ref([
  {
    label: "Dashboard",
    customIcon: new URL('@/assets/icons/dashboard.svg', import.meta.url).href,
    to: "/",
  },
  {
    label: "Clients",
    customIcon: new URL('@/assets/icons/clients.svg', import.meta.url).href,
    to: "/clients",
  },
  {
    label: "Jurisprudence",
    customIcon: new URL('@/assets/icons/jurisprudence.svg', import.meta.url).href,
    to: "/jurisprudence",
  },
  {
    label: "Documents",
    customIcon: new URL('@/assets/icons/documents.svg', import.meta.url).href,
    to: "/documents",
  },
  {
    label: "Dossiers juridiques",
    customIcon: new URL('@/assets/icons/dossiers.svg', import.meta.url).href,
    to: "/dossiers",
  },
  {
    label: "Calendrier",
    customIcon: new URL('@/assets/icons/calendrier.svg', import.meta.url).href,
    to: "/calendrier",
  },
  {
    label: "Tâches",
    customIcon: new URL('@/assets/icons/taches.svg', import.meta.url).href,
    to: "/taches",
  },
  {
    label: "Inventaire",
    customIcon: new URL('@/assets/icons/inventaire.svg', import.meta.url).href,
    to: "/inventaire",
  },
  {
    label: "Ordre de mission",
    customIcon: new URL('@/assets/icons/ordre-mission.svg', import.meta.url).href,
    to: "/ordre-mission",
  },
  {
    label: "Lois et articles",
    customIcon: new URL('@/assets/icons/lois.svg', import.meta.url).href,
    to: "/lois",
  },
  {
    label: "Tribunal",
    customIcon: new URL('@/assets/icons/tribunal.svg', import.meta.url).href,
    to: "/tribunal",
  },
  {
    label: "Paiements",
    customIcon: new URL('@/assets/icons/paiements.svg', import.meta.url).href,
    to: "/paiements",
  },
  {
    label: "Correspondence",
    customIcon: new URL('@/assets/icons/correspondence.svg', import.meta.url).href,
    to: "/correspondence",
  },
  {
    label: "Centre d'aide",
    customIcon: new URL('@/assets/icons/aide.svg', import.meta.url).href,
    to: "/aide",
  },
]);
</script>

<style scoped>
.p-menu .p-menuitem {
  @apply text-surface-300 cursor-pointer hover:text-surface-800;
}
:deep(.p-menuitem.p-focus span) {
  @apply text-surface-900;
}
:deep(.p-menuitem:hover img, .p-menuitem.p-focus img) {
  @apply invert-[.75] sepia-0 saturate-0 hue-rotate-0 !important;
}
</style>
