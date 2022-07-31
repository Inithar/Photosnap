export const infoCards = {
  beautifulStories: {
    mobile: 'assets/home/mobile/beautiful-stories.jpg',
    tablet: 'assets/home/tablet/beautiful-stories.jpg',
    desktop: 'assets/home/desktop/beautiful-stories.jpg',
  },
  createAndShare: {
    mobile: 'assets/home/mobile/create-and-share.jpg',
    tablet: 'assets/home/tablet/create-and-share.jpg',
    desktop: 'assets/home/desktop/create-and-share.jpg',
  },
  designedForEveryone: {
    mobile: 'assets/home/mobile/designed-for-everyone.jpg',
    tablet: 'assets/home/tablet/designed-for-everyone.jpg',
    desktop: 'assets/home/desktop/designed-for-everyone.jpg',
  },
  features: {
    mobile: 'assets/features/mobile/hero.jpg',
    tablet: 'assets/features/tablet/hero.jpg',
    desktop: 'assets/features/desktop/hero.jpg',
  },
  pricing: {
    mobile: 'assets/pricing/mobile/hero.jpg',
    tablet: 'assets/pricing/tablet/hero.jpg',
    desktop: 'assets/pricing/desktop/hero.jpg',
  },
};

export const stories = {
  mountains: {
    mobile: 'assets/stories/mobile/mountains.jpg',
    tablet: 'assets/stories/desktop/mountains.jpg',
    desktop: 'assets/stories/desktop/mountains.jpg',
  },
  cityscapes: {
    mobile: 'assets/stories/mobile/cityscapes.jpg',
    tablet: 'assets/stories/desktop/cityscapes.jpg',
    desktop: 'assets/stories/desktop/cityscapes.jpg',
  },
  daysVoyage: {
    mobile: 'assets/stories/mobile/18-days-voyage.jpg',
    tablet: 'assets/stories/desktop/18-days-voyage.jpg',
    desktop: 'assets/stories/desktop/18-days-voyage.jpg',
  },
  architecturals: {
    mobile: 'assets/stories/mobile/architecturals.jpg',
    tablet: 'assets/stories/desktop/architecturals.jpg',
    desktop: 'assets/stories/desktop/architecturals.jpg',
  },
  worldTour: {
    mobile: 'assets/stories/mobile/world-tour.jpg',
    tablet: 'assets/stories/desktop/world-tour.jpg',
    desktop: 'assets/stories/desktop/world-tour.jpg',
  },
  unforeseenCorners: {
    mobile: 'assets/stories/mobile/unforeseen-corners.jpg',
    tablet: 'assets/stories/desktop/unforeseen-corners.jpg',
    desktop: 'assets/stories/desktop/unforeseen-corners.jpg',
  },
  kingOnAfrica: {
    mobile: 'assets/stories/mobile/king-on-africa.jpg',
    tablet: 'assets/stories/desktop/king-on-africa.jpg',
    desktop: 'assets/stories/desktop/king-on-africa.jpg',
  },
  tripToNowhere: {
    mobile: 'assets/stories/mobile/trip-to-nowhere.jpg',
    tablet: 'assets/stories/desktop/trip-to-nowhere.jpg',
    desktop: 'assets/stories/desktop/trip-to-nowhere.jpg',
  },
  rageOfTheSea: {
    mobile: 'assets/stories/mobile/rage-of-the-sea.jpg',
    tablet: 'assets/stories/desktop/rage-of-the-sea.jpg',
    desktop: 'assets/stories/desktop/rage-of-the-sea.jpg',
  },
  runningFree: {
    mobile: 'assets/stories/mobile/running-free.jpg',
    tablet: 'assets/stories/desktop/running-free.jpg',
    desktop: 'assets/stories/desktop/running-free.jpg',
  },
  behindTheWaves: {
    mobile: 'assets/stories/mobile/behind-the-waves.jpg',
    tablet: 'assets/stories/desktop/behind-the-waves.jpg',
    desktop: 'assets/stories/desktop/behind-the-waves.jpg',
  },
  calmWaters: {
    mobile: 'assets/stories/mobile/calm-waters.jpg',
    tablet: 'assets/stories/desktop/calm-waters.jpg',
    desktop: 'assets/stories/desktop/calm-waters.jpg',
  },
  milkyWay: {
    mobile: 'assets/stories/mobile/milky-way.jpg',
    tablet: 'assets/stories/desktop/milky-way.jpg',
    desktop: 'assets/stories/desktop/milky-way.jpg',
  },
  darkForest: {
    mobile: 'assets/stories/mobile/dark-forest.jpg',
    tablet: 'assets/stories/desktop/dark-forest.jpg',
    desktop: 'assets/stories/desktop/dark-forest.jpg',
  },
  somwarpet: {
    mobile: 'assets/stories/mobile/somwarpet.jpg',
    tablet: 'assets/stories/desktop/somwarpet.jpg',
    desktop: 'assets/stories/desktop/somwarpet.jpg',
  },
  landOfDreams: {
    mobile: 'assets/stories/mobile/land-of-dreams.jpg',
    tablet: 'assets/stories/desktop/land-of-dreams.jpg',
    desktop: 'assets/stories/desktop/land-of-dreams.jpg',
  },
};

export const heroGraphic = {
  moonOfAppalachia: {
    mobile: 'assets/stories/mobile/moon-of-appalachia.jpg',
    tablet: 'assets/stories/tablet/moon-of-appalachia.jpg',
    desktop: 'assets/stories/desktop/moon-of-appalachia.jpg',
  },
  beta: {
    mobile: 'assets/shared/mobile/bg-beta.jpg',
    tablet: 'assets/shared/tablet/bg-beta.jpg',
    desktop: 'assets/shared/desktop/bg-beta.jpg',
  },
};

export const getInfoCardPhotoUrl = (section, device) =>
  infoCards[section][device];

export const getStoryPhotoUrl = (section, device) => stories[section][device];

export const getHeroGraphicUrl = (section, device) =>
  heroGraphic[section][device];
