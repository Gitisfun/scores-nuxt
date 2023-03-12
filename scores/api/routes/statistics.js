import httpClient from "~~/api/httpClient";

const END_POINT = "/statistics";

export const getStatistics = () => httpClient.get(END_POINT);
