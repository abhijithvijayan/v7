import {isEmpty, isString} from '@abhijithvijayan/ts-utils';

export enum SiteProps {
  Name = 'Abhijith Vijayan',
  Email = 'email@abhijithvijayan.in',
  Username = '@abhijithvijayan',

  Title = 'Abhijith Vijayan | Engineer & Developer',
  Description = "I build things that aren't evil.",
  Language = 'en-US',
  TileColor = '#1a202c',
  URL = 'https://abhijithvijayan.in',
  Keywords = 'Abhijith-Vijayan, Abhijith-V, abhijith-v, abhijithvijayan, abhijith-vijayan, abhijithv, _abhijithvijayan, _abhijithv, Abhijith-V-CEA, Abhijith-Vijayan-CEA, Abhijith-V-pathanamthitta, Abhijith-Vijayan-pathanamthitta, Abhijith-V-IHRD, Abhijith-Vijayan-IHRD, Abhijith-Vijayan-dev, abhijith-vijayan-developer, web-developer-in-pathanamthitta, abhijithvijayan-ceadoor, abhijith-vijayan-web-developer, full-stack, software-engineer',

  Thumbnail = '/images/unicorn.png',
  Icon192 = '/icons/192x192.png',
  Icon72 = '/icons/72x72.png',
  Icon96 = '/icons/96x96.png',
  Favicon = '/icons/favicon.ico',

  Profile = '/images/unicorn.png',
  Cover = '/images/activity.png',
}

export const Routes = {
  Root: '/',
  Donate: '/donate',
  Synapse: '/synapse',
  GitHub: '/github',
  Twitter: '/twitter',
  LinkedIn: '/linkedin',
  Patreon: '/patreon',
  PayPal: '/paypal',
  BuyMeACoffee: '/buymeacoffee',
  OpenCollective: '/opencollective',
} as const;

export const getFullLink = (
  prefix: string | undefined,
  path: string
): string => {
  if (isString(prefix) && !isEmpty(prefix)) {
    return prefix + path;
  }

  return path;
};
