import { getFavoritesFromCache } from "../logic/cache";
import { findClosestDateIndex } from "./date";

export const getOrientation = () => {
  const orientation = window.screen.orientation.type;
  if (orientation === "portrait-primary") {
    return true;
  } else if (orientation === "landscape-primary") {
    return false;
  }
  return true;
};

export const isOnRoute = (context, routeName) => {
  return context.$route.name === routeName;
};

export const navigate = (context, name, obj) => {
  if (obj) {
    context.$router.push({
      name: name,
      params: {
        obj,
      },
    });
  } else {
    context.$router.push({
      name: name,
    });
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const filterListByTeam = (list, team) => {
  let temp = [];
  for (const round of list) {
    let tempGames = [];
    for (const game of round.games) {
      if (game.homeTeam.includes(team) || game.awayTeam.includes(team)) {
        tempGames.push(game);
      }
    }
    if (tempGames.length > 0) {
      temp.push({ date: round.date, games: tempGames });
    }
  }
  return temp;
};

export const copyToClipBoard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.log(err);
  }
};

export const isEmpty = (obj) => {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return false;
};

export const getFavoritesFromSchedule = (list) => {
  const favoritesList = getFavoritesFromCache();
  const temp = [];
  if (favoritesList && favoritesList.length > 0) {
    for (const league of list) {
      for (const game of league.games) {
        if (
          favoritesList.includes(game.homeTeam.trim()) ||
          favoritesList.includes(game.awayTeam.trim())
        ) {
          temp.push(game);
        }
      }
    }
    return temp;
  }
  return [];
};

export const getLastFiveGames = (list, team) => {
  for (const match of list) {
    match.date = new Date(match.date);
  }

  list.sort((a, b) => a.date - b.date);

  const temp = [];

  for (const match of list) {
    let result = "-";

    if (match.homeScore.length > 0) {
      const homeScore = parseInt(match.homeScore);
      const awayScore = parseInt(match.awayScore);

      if (
        homeScore > awayScore &&
        team.trim().includes(match.homeTeam.trim())
      ) {
        result = "W";
      } else if (
        homeScore > awayScore &&
        team.trim().includes(match.awayTeam.trim())
      ) {
        result = "L";
      } else if (
        homeScore < awayScore &&
        team.trim().includes(match.homeTeam.trim())
      ) {
        result = "L";
      } else if (
        homeScore < awayScore &&
        team.trim().includes(match.awayTeam.trim())
      ) {
        result = "W";
      } else {
        result = "D";
      }
      temp.push({
        result,
        date: match.date,
        home: match.homeTeam,
        away: match.awayTeam,
        score: `${match.homeScore} - ${match.awayScore}`,
      });
    }
  }

  const dateList = temp.map((e) => e.date);

  const index = findClosestDateIndex(dateList);

  if (temp.length > 5) return temp.slice(-5);

  return temp.slice(0, index + 1);
};
