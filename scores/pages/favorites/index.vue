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
import { useScoresStore } from "~~/store/scores";
import baseApiRoute from "~~/api/baseApiRoute";

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
const store = useScoresStore();
const ROUTE_NAME = baseApiRoute(store.province);

const { data: teams } = await useFetch(`${ROUTE_NAME}/clubs`, {
  transform: (data) => {
    return data.map((e) => e.name).sort();
  },
});
</script>

<style>
.favorites-container {
  padding-bottom: 25px;
}
</style>
