import useWindowSize from './useWindowSize';

const useGetImageSrc = (src: string, includeTablet = false) => {
  const width = useWindowSize();
  let device = 'desktop';

  if (includeTablet && width >= 576 && width < 992) device = 'tablet';
  if (width < 576) device = 'mobile';

  return src.replace('desktop', device);
};

export default useGetImageSrc;
