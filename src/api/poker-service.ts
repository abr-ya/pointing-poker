import axios from "axios";

const baseUrl = process.env.API_URL;

// export const getMovie = async (id: string) => {
//   const response = await axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}`, {
//     cancelToken: cancelTokenSource.token,
//   });
//   return response.status === 200 ? selectOneMovieFields(response.data) : false;
// };

export const newGame = async () => {
  const response = await axios.post(`${baseUrl}game/`, {});
  return response.status === 201 ? response.data.newGame : null; // 201 - Created
};
