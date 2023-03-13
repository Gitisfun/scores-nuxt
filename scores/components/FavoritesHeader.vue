<template>
  <div class="favorites-container">
    <h2 class="favorites-header">FAVORIETEN</h2>
    <IconWithHover @iconClick="navToLeague" icon="bx:star" color="white" width="20" height="20" />
  </div>
</template>

<script setup>
import { FAVORITES_ROUTE } from "~~/logic/constants/routes";

async function navToLeague() {
  await navigateTo(FAVORITES_ROUTE);
}
</script>

<style scoped>
.favorites-container {
  display: flex;
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 14px;
  border-radius: 7.5px;
  background-color: orange;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}
.favorites-header {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 15px;
}
</style>
