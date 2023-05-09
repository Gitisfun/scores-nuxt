<template>
  <div class="header-container">
    <Icon v-if="isOnHomePage()" icon="bx:football" color="black" width="35" height="35" />
    <IconWithHover v-if="!isOnHomePage()" icon="bx:arrow-back" width="30" height="30" @iconClick="goBack" />
    <h1 class="header-container-text">{{ title }}</h1>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ANTWERPEN, BRABANT } from "~~/logic/constants/provinces";
import { HOME_ROUTE } from "~~/logic/constants/routes";

const route = useRoute();
const router = useRouter();
const { title } = defineProps({
  title: String,
});

function isOnHomePage() {
  if ("index" === route.name) return true;
  return false;
}
async function goBack() {
  if (BRABANT === route.name || ANTWERPEN === route.name) await navigateTo(HOME_ROUTE);
  else router.back();
}
</script>

<style scoped>
.header-container {
  font-weight: bold;
  padding-top: 1px;
  padding-bottom: 5px;
  padding-left: 25px;
  padding-right: 10px;
  display: flex;
  align-items: center;
}
.header-container-text {
  margin-left: 25px;
  color: black;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
}
</style>
