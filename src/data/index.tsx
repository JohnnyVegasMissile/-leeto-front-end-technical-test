// fct that get gift cards list on http://localhost:3001/gift-cards using fetch
import { APIURL } from "../constants";
import GiftCard from "../types/GiftCard";

export const getGiftCards = async (): Promise<GiftCard[]> => {
  const response = await fetch(`${APIURL}/gift-cards`);
  console.log(response);
  const data = await response.json();
  return data;
};

export const getGiftCard = async (id: string | number): Promise<GiftCard> => {
  const response = await fetch(`${APIURL}/gift-cards/${id}`);
  const data = await response.json();
  return data;
};
