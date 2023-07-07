<template>
  <h4>Zoek jouw club</h4>
  <input class="search-club-input" v-model="club" @input="search" />
  <Club v-for="item in searchedClubs" :key="item.id" :team="item.name" />
  <div v-if="hasFoundClubs" class="search-club-no-results">Geen clubs gevonden...</div>
  <div id="bottomElementOfPage" style="color: white">.</div>
</template>

<script setup>
import baseApiRoute from "~~/api/baseApiRoute";
import { ANTWERPEN, BRABANT } from "~~/logic/constants/provinces";

const club = ref("");
const clubs = ref([]);
const searchedClubs = ref([]);
const hasFoundClubs = ref(false);

const firstLoad = ref(true);
const scrollToBottom = () => {
  const el = document.getElementById("bottomElementOfPage");

  if (el) {
    el.scrollIntoView();
  }
};

const search = async (e) => {
  if (firstLoad.value) {
    firstLoad.value = false;
    const ROUTE_NAME_BRABANT = baseApiRoute(BRABANT);
    const ROUTE_NAME_ANTWERPEN = baseApiRoute(ANTWERPEN);
    const [{ data: clubsBrabant }, { data: clubsAntwerpen }] = await Promise.all([useFetch(`${ROUTE_NAME_BRABANT}/clubs`), useFetch(`${ROUTE_NAME_ANTWERPEN}/clubs`)]);

    clubs.value = clubsBrabant.value.concat(clubsAntwerpen.value).sort((a, b) => a.name.localeCompare(b.name));
  }
  const searchText = e.target.value;
  if (searchText.length > 0) {
    hasFoundClubs.value = false;
    searchedClubs.value = clubs.value.filter((c) => c.name.toUpperCase().includes(searchText.toUpperCase())).slice(0, 5);
    if (searchedClubs.value.length === 0) hasFoundClubs.value = true;
  } else {
    hasFoundClubs.value = false;
    searchedClubs.value = [];
  }
  scrollToBottom();
};
</script>

<style>
.search-club-input {
  width: 100%;
  margin-bottom: 5px;
  height: 30px;
  border: none;
  outline: none;
  font-size: 14px;
  background: white;
  border: 1.7px solid grey;
  border-radius: 6px;
  padding: 0 15px;
  resize: none;
  box-sizing: border-box;
}

.search-club-no-results {
  margin-top: 5px;
  padding: 5px;
  font-size: 14px;
}
</style>
