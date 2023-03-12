import httpClient from "~~/api/httpClient";

const END_POINT = "/dates";

export const getDates = () => httpClient.get(END_POINT);
