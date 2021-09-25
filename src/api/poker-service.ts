import axios from "axios";

const baseUrl = process.env.API_URL;

export const newGame = async () => {
  const response = await axios.post(`${baseUrl}game/`, {});
  return response.status === 201 ? response.data.newGame : null; // 201 - Created
};

export const getGame = async (id: string) => {
  const response = await axios.get(`${baseUrl}game/${id}`);
  return response.status === 200 ? response.data : null;
};
