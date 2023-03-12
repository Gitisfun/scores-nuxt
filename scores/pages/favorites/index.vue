<template>
  <div class="favorites-container">
    <Header title="FAVORIETEN" />
    <Divider />
    <div v-if="teams.length > 0">
      <FavoriteItem v-for="team in teams" :team="team" :key="team" />
    </div>
  </div>
</template>

<script setup>
import FavoritesController from "~~/api/calls/favorites";

const teams = ref([]);

onMounted(() => {
  FavoritesController.get(null, (res) => {
    const temp = res.data.map((e) => e.name);
    teams.value = temp.sort();
  });
});
</script>

<style>
.favorites-container {
  padding-bottom: 25px;
}
</style>
