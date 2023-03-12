<template>
  <div v-if="isLoading">
    <Header title="MATCH" />
    <MatchInfo :game="game" />
    <div v-if="isInfoLoadedSuccessfully">
      <KitContainer />
      <div class="match-lastfivegames-container">
        <LastFiveGames class="match-lastfivegames-item" />
        <LastFiveGames isHomeTeam="no" class="match-lastfivegames-item" />
      </div>
      <Address :address="getAddress()" />
      <ArtificialPitch :text="getArtificialPitch()" />
      <Remark v-if="isRemarkVisible()" :text="getRemark()" />
    </div>
    <Ranking />
  </div>
</template>

<script setup>
import MatchController from "~~/api/calls/match";
import { getLastFiveGames } from "~~/logic/util.js";
import { useScoresStore } from "~~/store/scores";

const store = useScoresStore();
const isLoading = ref(false);
const game = ref(null);
const info = ref(null);
const isInfoLoadedSuccessfully = ref(false);

const route = useRoute();

function getAddress() {
  if (info.value) {
    return `${info.value.homeTeam.street}, ${info.value.homeTeam.county}`;
  }
  return "";
}
function getRemark() {
  if (info.value) {
    return info.value.homeTeam.remark;
  }
  return "";
}
function getArtificialPitch() {
  if (info.value) {
    return info.value.homeTeam.artificial;
  }
  return "";
}
function isRemarkVisible() {
  if (info.value && info.value.homeTeam.remark.length > 0) {
    return true;
  }
  return false;
}

onMounted(() => {
  game.value = route.query;
  MatchController.get(
    {
      firstParam: { home: game.value.homeTeam, away: game.value.awayTeam },
      secondParam: { league: game.value.league },
    },
    (res) => {
      info.value = res[0].data;

      const lastFiveGamesForHomeTeam = getLastFiveGames(info.value.homeTeamMatches, game.value.homeTeam);
      const lastFiveGamesForAwayTeam = getLastFiveGames(info.value.awayTeamMatches, game.value.awayTeam);

      store.setLastFiveGames({
        home: lastFiveGamesForHomeTeam,
        away: lastFiveGamesForAwayTeam,
      });

      store.setRanking(res[1].data.ranking);
      store.setKit({
        home: info.value.homeTeam.kit,
        away: info.value.awayTeam.kit,
      });
      const matchTeams = {
        home: info.value.homeTeam.name,
        away: info.value.awayTeam.name,
      };
      store.setMatchTeams(matchTeams);
      isLoading.value = true;
      if (info.value.homeTeam.id && info.value.awayTeam.id) {
        isInfoLoadedSuccessfully.value = true;
      }
    }
  );
});
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
</style>
