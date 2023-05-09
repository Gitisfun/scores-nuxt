import { ANTWERPEN, BRABANT } from "~~/logic/constants/provinces";

const baseApiRoute = (province) => {
  if (province === ANTWERPEN) return "https://scraper-scores-antwerpen.herokuapp.com/api";
  if (province === BRABANT) return "https://scraper-scores.herokuapp.com/api";
  return "";
};

export default baseApiRoute;
