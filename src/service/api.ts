import axios from "axios";
import config from "../../config";

const searchImages = async (term: string) => {
  const response = await axios.get(`${config.unsplash}/search/photos`, {
    headers: {
      Authorization: import.meta.env.REACT_APP_API_KEY,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
