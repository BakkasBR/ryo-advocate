<script setup>
import Login from './views/auth/Login.vue'
</script>

<template>
  <Login />
  <router-view :key="$route.path"></router-view>
</template>

<style></style>