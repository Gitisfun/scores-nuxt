import httpClient from "~~/api/httpClient";

const END_POINT = "/clubs";

export const getAllClubs = () => httpClient.get(END_POINT);

export const getClub = (params) => httpClient.get(`${END_POINT}/match`, { params: params });
