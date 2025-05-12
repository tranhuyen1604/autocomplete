import axios from "axios";

const searchImages = async (term: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/search/photos`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY || "",
      },
      params: {
        query: term,
      },
    }
  );

  return response.data.results;
};

export default searchImages;
