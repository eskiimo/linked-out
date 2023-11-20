import { useEffect, useState } from "react";

import { Axios } from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
};
