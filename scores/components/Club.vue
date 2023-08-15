<template>
  <div class="club-container" @click="navToClub">
    <ImageMapper :team="team" />
    <div class="club-text">{{ team }}</div>
  </div>
</template>

<script setup>
import { CLUB_ROUTE } from "~~/logic/constants/routes";

const { team, slug } = defineProps({
  team: String,
  slug: String,
});

async function navToClub() {
  await navigateTo({
    path: `${CLUB_ROUTE}/${slug}`,
  });
}
</script>

<style>
.club-container {
  margin-top: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 12px;
  font-weight: 500;
}
.club-container:hover {
  cursor: pointer;
  background: lightgray;
}

.club-container:active {
  border-radius: 5px;
  color: white;
  background: #dff9fb;
}
</style>
