<template>
  <div>
    <div v-if="favorites.length === 0 && isFavoriteListEmpty()" class="no-favorites-container">Je hebt nog geen favoriete club toegevoegd. Klik op het sterretje als je went om een favoriete club toe te voegen.</div>
    <div v-else-if="favorites.length === 0" class="no-favorites-container">Geen wedstrijden deze ronde.</div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { getFavoritesFromCache } from "~~/logic/cache";
import { useScoresStore } from "~~/store/scores";

export default {
  name: "NoFavoritesInfo",
  computed: {
    ...mapState(useScoresStore, {
      favorites: "favorites",
    }),
  },
  methods: {
    isFavoriteListEmpty() {
      const list = getFavoritesFromCache();
      if (list.length > 0) return false;
      return true;
    },
  },
};
</script>

<style>
.no-favorites-container {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 25px;
}
</style>
