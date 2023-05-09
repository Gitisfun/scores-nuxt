import { convertToDateList } from "./date.js";

const KEY_LAST_VISITED = "scores-last-visited-page";
const KEY_DATES = "scores-dates";
const KEY_MATCH = "scores-match";
const KEY_FAVORITES = "scores-favorites";
const KEY_THROTTLE = "scores-throttle";

const storeInLocalstorage = (key, value) => {
  const cookie = useCookie(key);
  cookie.value = value;
};

const getFromLocalstorage = (key) => {
  const cookie = useCookie(key);
  return cookie ? cookie.value : null;
};

export const getLastVisitedFromCache = (value) => {
  if (value) {
    storeInLocalstorage(KEY_LAST_VISITED, { obj: value });
    return value;
  }
  const temp = getFromLocalstorage(KEY_LAST_VISITED);
  return temp.obj;
};

export const storeDatesInCache = (value) => storeInLocalstorage(KEY_DATES, value);

export const getDatesFromCache = () => {
  const temp = getFromLocalstorage(KEY_DATES);
  const list = convertToDateList(temp);
  return list;
};

export const getMatchFromCache = (value) => {
  if (value) {
    storeInLocalstorage(KEY_MATCH, { obj: value });
    return value;
  }
  const temp = getFromLocalstorage(KEY_MATCH);
  return temp.obj;
};

export const addFavoritesInCache = (value) => {
  const list = getFavoritesFromCache();
  list.push(value);
  storeInLocalstorage(KEY_FAVORITES, list);
};

export const removeFavoritesFromCache = (value) => {
  const list = getFavoritesFromCache();
  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      list.splice(i, 1);
    }
  }
  storeInLocalstorage(KEY_FAVORITES, list);
};

export const getFavoritesFromCache = () => {
  const temp = getFromLocalstorage(KEY_FAVORITES);
  if (temp) return temp;
  return [];
};

export const storeThrottleDateInCache = (value) => storeInLocalstorage(KEY_THROTTLE, value);

export const getThrottleDateFromCache = () => {
  const temp = getFromLocalstorage(KEY_THROTTLE);
  if (temp) return temp;
  return null;
};
