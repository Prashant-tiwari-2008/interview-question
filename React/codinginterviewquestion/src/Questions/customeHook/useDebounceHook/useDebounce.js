import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [dvalue, setDvalue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDvalue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return dvalue;
};

export default useDebounce;
