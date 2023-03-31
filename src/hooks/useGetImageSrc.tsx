import useWindowSize from './useWindowSize';

const useGetImageSrc = (src: string) => {
  const width = useWindowSize();
  let device = 'mobile';

  if (width >= 576 && width < 992) device = 'tablet';
  if (width >= 992) device = 'desktop';

  return src.replace('desktop', device);
};

export default useGetImageSrc;
