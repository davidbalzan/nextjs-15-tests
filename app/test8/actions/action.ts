"use server";
import { headers } from "next/headers";

const getTime = async (): Promise<Date> => {
  const now: Date = new Date();
  return now;
}

// rely on header X-Vercel-IP-Country to get country
export const getCountry = async (): Promise<string> => {

  const headersList = await headers()
  const userCountry = headersList.get('X-Vercel-IP-Country');
  return userCountry || 'ROW';
}

export const getContent = async (paras: number): Promise<string[]> => {
  const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=' + paras);
  const jsonResponse = await response.json();
  return jsonResponse;
}

export default getTime;