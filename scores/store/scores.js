import { defineStore } from "pinia";
import { convertToDateList } from "~~/logic/date";
import { getFavoritesFromSchedule } from "~~/logic/util";

export const useScoresStore = defineStore("scores", {
  state: () => ({
    scheduleIndex: null,
    schedule: [],
    dates: [],
    ranking: [],
    kit: null,
    matchTeams: null,
    favorites: [],
    lastFiveGames: [],
    scheduleLeague: [],
  }),
  getters: {
    getScheduleIndex: (state) => state.scheduleIndex,
    getSchedule: (state) => state.schedule,
    getDates: (state) => state.dates,
    getRanking: (state) => state.ranking,
    getKit: (state) => state.kit,
    getMatchTeams: (state) => state.matchTeams,
    getFavorites: (state) => state.favorites,
    getLastFiveGames: (state) => state.lastFiveGames,
    getScheduleLeague: (state) => state.scheduleLeague,
  },
  actions: {
    setSchedule(list) {
      this.schedule = list;
    },
    setScheduleIndex(index) {
      this.scheduleIndex = index;
    },
    setDates(dates) {
      this.dates = convertToDateList(dates);
    },
    setRanking(ranking) {
      this.ranking = ranking;
    },
    setKit(kit) {
      this.kit = kit;
    },
    setMatchTeams(teams) {
      this.matchTeams = teams;
    },
    setFavorites(teams) {
      this.favorites = getFavoritesFromSchedule(teams);
    },
    setLastFiveGames(games) {
      this.lastFiveGames = games;
    },
    setScheduleLeague(list) {
      this.scheduleLeague = list;
    },
  },
});
