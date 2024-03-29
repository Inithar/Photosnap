import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return () => window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return width;
};

export default useWindowSize;
