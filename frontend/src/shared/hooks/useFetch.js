import React, { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  //datahttp cards
  const [statehttp, setstatehttp] = useState(null);

  useEffect(() => {
    const getHttp = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setstatehttp(data);
    };
    getHttp();
  }, []);

  return { statehttp };
};
