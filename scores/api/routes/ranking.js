import httpClient from "~~/api/httpClient";

const END_POINT = "/rankings";

export const getRanking = (params) => httpClient.get(END_POINT, { params: params });
