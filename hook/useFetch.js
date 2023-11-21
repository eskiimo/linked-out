import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "96d72aeb2fmshcebff7d3ac6acc9p1d8f08jsnda7543043ef3",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };
  const fetchData = async () => {
    setIsloading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsloading(false);
    } catch (error) {
      setError(error);
      console.log("err", error.message);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsloading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
