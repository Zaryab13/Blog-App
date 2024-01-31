import { useState, useEffect } from "react";
// import axios from "axios";

const usePostAPI = async (url, headers = {}) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendData = async () => {
    try {
      const res = await fetch(url, headers);

      setResponse(res.data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }a
  };

  useEffect(() => {
    sendData();
  }, []);

  return { response, isLoading, error };
};

export default usePostAPI;
