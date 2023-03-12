import { ApiCalls } from "~~/api/apiCalls";
import { getAllClubs } from "~~/api/routes/clubs";

class FavoritesController {
  static get(params, callback) {
    ApiCalls.get(getAllClubs, params, callback);
  }
}

export default FavoritesController;
