import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const updateWindowWidth = () => {
      const currentWidth = window.innerWidth;
      currentWidth >= 768 ? setIsMobile(false) : setIsMobile(true);
    };

    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return isMobile;
};
