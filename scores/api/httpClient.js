import axios from "axios";

const httpClient = axios.create({
  //baseURL: "http://localhost:5050/api/",
  baseURL: "https://scraper-scores.herokuapp.com/api/",
  timeout: 10000, // indicates, 1000ms ie. 1 second
  headers: {
    "Content-Type": "application/json",
  },
});

// httpClient.defaults.headers.common['authorization'] = `Bearer ${JSON.parse(localStorage.getItem("authtokenws"))}`

export default httpClient;
