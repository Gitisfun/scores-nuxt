<template>
  <div class="lastfivegames-details">
      <div class="lastfivegames-details-item" v-for="item in getGames" :key="item.id">
          <GameResult style="flex: 1; max-width: 25px; margin:5px;" :text="item?.result" />
          <span class="lastfivegames-details-item-team"  >{{getOpponent(item)}} </span>
          <span class="lastfivegames-details-item-score" >{{item?.score}} </span>
        </div>
    </div>
</template>

<script setup>
import { useScoresStore } from "~~/store/scores";

const store = useScoresStore();
const { isHomeTeam, team } = defineProps({
  isHomeTeam: String,
  team: String
});


const getGames = computed(() => {
  if (isHomeTeam === "no") return store.lastFiveGames?.away;
  return store.lastFiveGames?.home;
});

const getOpponent = (game) => {
    console.log(team);
    console.log(game);
  if(team === game?.home) return game?.away
  return game?.home
}
</script>

<style>
.lastfivegames-details{
    flex: 1
}
.lastfivegames-details-item{
    display: flex;
    justify-content: space-between;
}

.lastfivegames-details-item-team{
    flex: 4; font-weight: 300;
    width: 50px;
    margin:5px;
    text-align: center;
    border-radius: 5px;
    font-size: 12px;


    font-family: "Poppins", sans-serif;
}

.lastfivegames-details-item-score{
    flex: 1;
    width: 50px;
    margin:5px;
    text-align: center;
    background-color: white;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: black;
}
</style>