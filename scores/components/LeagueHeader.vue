<template>
  <div class="league-container">
    <span>
      {{ title }}
    </span>
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
.league-container {
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
  background-color: skyblue;
  /* background-color: #dff9fb; */
  color: white;
  /* border: 1px solid skyblue; */
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}
</style>
