import { benefits as homeBenefits } from 'pages/home/HomeData';

export const infoBoxData = {
  isBlack: true,
  src: 'features',
  alt: 'Man holds professional camera against mountain backdrop',
  header: 'Features',
  description:
    'We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories.',
  isButtonShown: false,
  buttonText: '',
  isRight: true,
};

export const benefits = [
  ...homeBenefits,
  {
    id: 4,
    src: 'assets/features/desktop/custom-domain.svg',
    header: 'Custom Domain',
    description:
      'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
  },
  {
    id: 5,
    src: 'assets/features/desktop/boost-exposure.svg',
    header: 'Boost Your Exposure',
    description:
      'Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.',
  },
  {
    id: 6,
    src: 'assets/features/desktop/drag-drop.svg',
    header: 'Drag & Drop Image',
    description:
      'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
  },
];
