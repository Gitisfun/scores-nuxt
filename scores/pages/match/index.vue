<template>
  <div>
    <Header title="MATCH" />
    <MatchInfo :game="game" />
    <div>
      <KitContainer />
      <div v-if="isDetailsShown" class="match-lastfivegames-container">
        <LastFiveGames class="match-lastfivegames-item" />
        <LastFiveGames isHomeTeam="no" class="match-lastfivegames-item" />
      </div>
      <button
        class="match-detail-button"
        v-if="isDetailsShown"
        @click="showDetails"
      >
        Show details
      </button>
      <div v-if="!isDetailsShown" class="match-lastfivegamesdetails-container">
        <LastFiveGamesDetails :team="game?.homeTeam" />
        <LastFiveGamesDetails isHomeTeam="no" :team="game?.awayTeam" />
      </div>
      <Address :address="getAddress()" />
      <ArtificialPitch :text="getArtificialPitch()" />
      <Remark v-if="isRemarkVisible()" :text="getRemark()" />
    </div>
    <Ranking />
  </div>
</template>

<script setup>
import baseApiRoute from "~~/api/baseApiRoute";
import { getLastFiveGames } from "~~/logic/util.js";
import { useScoresStore } from "~~/store/scores";

useHead({
  title: "KAVVV uitslagen",
  meta: [
    {
      name: "description",
      content:
        "Alle voetbal uitslagen van de Koninklijke Algemene Vereniging van Vriendenclubs Vlaams-Brabant & Oost-Vlaanderen. Wedstrijdverslag van jouw lokale team!",
    },
  ],
  link: [{ rel: "canonical", href: "https://kavvv-uitslagen.be" }],
});

const store = useScoresStore();
const route = useRoute();
const game = ref(route.query);
const isDetailsShown = ref(false);
const ROUTE_NAME = baseApiRoute(store.province);

const [{ data: match }, { data: league }] = await Promise.all([
  useFetch(`${ROUTE_NAME}/clubs/match`, {
    query: { home: game.value?.homeTeam, away: game.value?.awayTeam },
  }),
  useFetch(`${ROUTE_NAME}/rankings`, {
    query: { league: game.value?.league },
  }),
]);

const lastFiveGamesForHomeTeam = getLastFiveGames(
  match.value?.homeTeamMatches,
  game.value?.homeTeam
);
const lastFiveGamesForAwayTeam = getLastFiveGames(
  match.value?.awayTeamMatches,
  game.value?.awayTeam
);

store.setLastFiveGames({
  home: lastFiveGamesForHomeTeam,
  away: lastFiveGamesForAwayTeam,
});

store.setRanking(league.value?.ranking);
store.setKit({
  home: match.value?.homeTeam?.kit,
  away: match.value?.awayTeam?.kit,
});
store.setMatchTeams({
  home: match.value?.homeTeam?.name,
  away: match.value?.awayTeam?.name,
});

const showDetails = () => (isDetailsShown.value = true);

function getAddress() {
  if (match.value) {
    return `${match.value?.homeTeam?.street}, ${match.value?.homeTeam?.county}`;
  }
  return "";
}
function getRemark() {
  if (match.value) {
    return match.value?.homeTeam?.remark;
  }
  return "";
}
function getArtificialPitch() {
  if (match.value) {
    return match.value?.homeTeam?.artificial;
  }
  return "";
}
function isRemarkVisible() {
  if (match.value && match.value?.homeTeam?.remark?.length > 0) {
    return true;
  }
  return false;
}

function slugify(str) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}

const { gtag } = useGtag();

gtag(
  slugify(`match_${route.query.homeTeam}-${route.query.awayTeam}`),
  "visit",
  {
    app_name: "KAVVV",
    screen_name: "match",
  }
);
</script>

<style scoped>
.match-lastfivegames-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.match-lastfivegames-item {
  flex: 1;
}
.match-detail-button {
  all: unset;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
}

.match-lastfivegamesdetails-container {
  display: flex;
  gap: 25px;
}
@media (max-width: 500px) {
  .match-lastfivegamesdetails-container {
    padding: 5px;
    gap: 5px;
  }
}
@media (max-width: 375px) {
  .match-lastfivegamesdetails-container {
    padding: 0px;
    gap: 0px;
  }
}
</style>
