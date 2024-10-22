"use server";

import { Game } from "../lib/Game";

const NEPTUNE_BASE_URL = 'https://api.findmyrtp.com';
const endpoint = `${NEPTUNE_BASE_URL}/svc-games/api/public/games?page=0&size=50000&sort=releaseDate&sort=desc&activeOnly=true&gameTypes=SLOT`;

const getGames = async (): Promise<Game[]> => {
  console.log("getting games now....");
  
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  const data: Game[] = jsonResponse.content;
  return data;
}

export default getGames;