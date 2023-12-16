<template>
  <div class="match-info-container">
    <div class="match-info-team">
      <ImageMapperMatch :team="game?.homeTeam" />
      <div class="match-info-team-text">{{ game?.homeTeam }}</div>
    </div>
    <div class="match-info-score">
      <div class="match-info-info-score-time">{{ formattedScoreOrTime }}</div>
      <div class="match-info-info-score-date">{{ formattedDate }}</div>
    </div>
    <div class="match-info-team">
      <ImageMapperMatch :team="game?.awayTeam" />
      <div class="match-info-team-text">{{ game?.awayTeam }}</div>
    </div>
  </div>
</template>

<script>
import ImageMapperMatch from "./ImageMapperMatch.vue";
import { format } from "date-fns/index.js";

export default {
  name: "MatchInfo",
  props: {
    game: Object,
  },
  components: { ImageMapperMatch },
  computed: {
    formattedScoreOrTime() {
      if (this.game?.score === "UITGESTELD") return "Uitg.";
      if (this.game.homeScore && this.game.awayScore) {
        return `${this.game.homeScore} - ${this.game.awayScore}`;
      }
      return this.game.time;
    },
    formattedDate() {
      const temp = new Date(this.game.date);
      if (isNaN(temp)) return "";
      return format(temp, "dd/MM/yy");
    },
  },
  methods: {},
};
</script>

<style scoped>
.match-info-container {
  padding-left: 5px;
  padding-right: 5px;
  font-family: "Poppins", sans-serif;
  border-top: 0.1px solid #dff9fb;
  border-bottom: 0.1px solid #dff9fb;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100px;
}
.match-info-team {
  flex: 1;
}
.match-info-team-text {
  font-size: 10px;
  text-align: center;
  margin-top: 15px;
  font-weight: bold;
}
.match-info-score {
  flex: 1;
  text-align: center;
}
.match-info-info-score-time {
  color: black;
  font-size: 30px;
  margin-bottom: 5px;
  font-weight: bold;
}
.match-info-info-score-date {
  color: black;
  font-size: 12px;
}
</style>
