<template>
  <div class="leagueheadertitle-container">
    <h2 class="leagueheadertitle-header">
      {{ title }}
    </h2>
    <IconWithHover @iconClick="navToLeague" icon="bx:caret-right" color="white" width="20 " height="20" />
  </div>
</template>

<script setup>
import { LEAGUE_ROUTE } from "~~/logic/constants/routes";

const { title } = defineProps({
  title: String,
});
async function navToLeague() {
  await navigateTo({
    path: LEAGUE_ROUTE,
    query: {
      league: title,
    },
  });
}
</script>

<style scoped>
.leagueheadertitle-container {
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
  background-color: black;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}
.leagueheadertitle-header {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 15px;
}
</style>
