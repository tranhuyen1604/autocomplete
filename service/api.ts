import axios from "axios";
import config from "../config";

const searchImages = async (term: string) => {
  const response = await axios.get(`${config.unsplash}/search/photos`, {
    headers: {
      Authorization: "Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
