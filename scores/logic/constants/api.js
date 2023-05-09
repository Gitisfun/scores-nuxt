const BASE_URL = "http://localhost:5050/api";

class ApiRoutes {
  static clubs = `${BASE_URL}/clubs`;
  static clubs_match = `${BASE_URL}/clubs/match`;
  static dates = `${BASE_URL}/dates`;
  static gamesByRound = `${BASE_URL}/games/round`;
  static gamesByLeague = `${BASE_URL}/games/league`;
  static rankings = `${BASE_URL}/rankings`;
  static statistics = `${BASE_URL}/statistics`;
}
