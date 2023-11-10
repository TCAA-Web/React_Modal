import { useEffect, useState } from "react";
// Fetch hook
export const useFetch = (_url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      let res = await fetch(_url);
      let data = await res.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {fetchData()}, [_url]);

  return { data, error };
};
