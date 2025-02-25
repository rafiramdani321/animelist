import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getAnimeTop() {
  try {
    const response = await axios.get(`${API_BASE_URL}/top/anime`);
    return response.data.data;
  } catch (error) {
    console.error("Error : ", error);
    return [];
  }
}