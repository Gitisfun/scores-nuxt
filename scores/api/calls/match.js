import { ApiCalls } from "~~/api/apiCalls";
import { getClub } from "~~/api/routes/clubs";
import { getRanking } from "~~/api/routes/ranking";

class MatchController {
  static get(params, callback) {
    const { firstParam, secondParam } = params;
    ApiCalls.getMultiple([getClub(firstParam), getRanking(secondParam)], callback);
  }
}

export default MatchController;
