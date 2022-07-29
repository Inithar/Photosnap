import { useEffect, useState } from 'react';

export const useGetDevice = () => {
  const [device, setDevice] = useState();

  useEffect(() => {
    const updateWindowWidth = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth < 768) return setDevice('mobile');

      if (currentWidth >= 768 && currentWidth < 1200)
        return setDevice('tablet');

      if (currentWidth >= 1200) return setDevice('desktop');
    };

    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return device;
};
