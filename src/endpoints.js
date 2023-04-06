import { API_KEY } from "./env";

const BASE_URL = "https://api.giphy.com/v1/gifs/";

export const searchGiphy = async (query) => {
  const response = await fetch(
    `${BASE_URL}search?q=${query}&api_key=${API_KEY}`
  );
  const jsonResult = await response.json();
  return jsonResult;
};
