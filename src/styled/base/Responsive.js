const size = {
  tablet: '768px',
  largeTablet: '1024px',
  desktop: '1440px',
};

export const device = {
  tablet: `@media (min-width: ${size.tablet})`,
  largeTablet: `@media (min-width: ${size.largeTablet})`,
  desktop: `@media (min-width: ${size.desktop})`,
};
