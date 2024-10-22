"use server";

import { Game } from "../lib/Game";

const NEPTUNE_BASE_URL = 'https://api.findmyrtp.com';

const getGames = async (activeNonly: boolean): Promise<Game[]> => {
  console.log("getting games now....");
  const endpoint = `${NEPTUNE_BASE_URL}/svc-games/api/public/games?page=0&size=50000&sort=releaseDate&sort=desc&activeOnly=${activeNonly}&gameTypes=SLOT`;

  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  const data: Game[] = jsonResponse.content;
  return data;
}

export default getGames;