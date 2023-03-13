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

useHead({
  title: "KAVVV uitslagen",
  meta: [
    {
      name: "description",
      content: "Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Vlaams-Brabant & Oost-Vlaanderen. Kies hier een favoriet team!",
    },
  ],
  link: [{ rel: "canonical", href: "https://kavvv-uitslagen.be" }],
});

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
