<template>
  <NuxtLoadingIndicator />
  <Loader v-if="loading" />
  <NuxtPage />
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap");

* {
  touch-action: manipulation;
}

body {
  margin: 0;
  padding-top: 10px;
  background-color: white;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}
@media (min-width: 900px) {
  body {
    max-width: 750px;
    margin: auto;
  }
}
</style>
