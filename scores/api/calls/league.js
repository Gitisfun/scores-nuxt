import { ApiCalls } from "~~/api/apiCalls";
import { getAllGamesByLeague } from "~~/api/routes/games";
import { getRanking } from "~~/api/routes/ranking";

class LeagueController {
  static get(params, callback) {
    ApiCalls.getMultiple([getAllGamesByLeague(params), getRanking(params)], callback);
  }
}

export default LeagueController;
