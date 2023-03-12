import { shouldThrottle } from "~~/logic/throttling";
import { ApiCalls } from "~~/api/apiCalls";
import { getDates } from "~~/api/routes/dates";
import { getAllGamesByRound } from "~~/api/routes/games";
import { getStatistics } from "~~/api/routes/statistics";

class HomeController {
  static get(params, callback) {
    const apiCalls = [getDates(), getAllGamesByRound(params)];
    if (shouldThrottle()) apiCalls.push(getStatistics());
    ApiCalls.getMultiple(apiCalls, callback);
  }

  static getRound(params, callback) {
    ApiCalls.get(getAllGamesByRound, params, callback);
  }
}

export default HomeController;
