import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.rates);
    };

    fetchData();
  }, [url]);

  return data;
}

export default useFetchData;