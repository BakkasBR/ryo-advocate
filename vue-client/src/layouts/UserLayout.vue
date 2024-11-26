<template>
    <div class="flex h-screen">
      <!-- Sidebar -->
        <Sidebar />
      <!-- Main Content -->
      <div class="flex flex-1 flex-col bg-gray-50 border-b border-gray-200">
        <!-- Navbar -->
        <header>
          <Navbar class="pl-3" />
        </header>
  
        <!-- Main Section -->
        <main class="flex-1 overflow-y-auto">
          <slot />
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import Sidebar from "@/components/Sidebar.vue";
  import Navbar from "@/components/Navbar.vue";
  </script>
  
  <style scoped>
  /* Scoped styles for layout */
  </style>
  