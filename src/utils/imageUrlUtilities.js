export const home = {
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
};

export const getUrlFromHomePage = (section, device) => home[section][device];
