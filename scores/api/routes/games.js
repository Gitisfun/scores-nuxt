import httpClient from "~~/api/httpClient";

const END_POINT = "/games";

export const getAllGamesByRound = (params) => httpClient.get(`${END_POINT}/round`, { params: params });

export const getAllGamesByLeague = (params) => httpClient.get(`${END_POINT}/league`, { params: params });
