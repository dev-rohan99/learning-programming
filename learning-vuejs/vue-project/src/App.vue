<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import Test from "@/pages/Test.vue";
</script>

<template>
  <header>
    
  </header>

  <main>
    <!-- <Test/> -->
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </main>
  <RouterView/>
</template>

