import React from 'react';

import GitHubIcon from './GitHub';
import DonateIcon from './Donate';
import PencilIcon from './Pencil';
import CoffeeIcon from './Coffee';
import PayPalIcon from './PayPal';
import PatreonIcon from './Patreon';
import TwitterIcon from './Twitter';
import LinkedInIcon from './LinkedIn';

const icons = {
  github: GitHubIcon,
  coffee: CoffeeIcon,
  paypal: PayPalIcon,
  donate: DonateIcon,
  pencil: PencilIcon,
  twitter: TwitterIcon,
  patreon: PatreonIcon,
  linkedin: LinkedInIcon,
};

export type Icons = keyof typeof icons;

type Props = {
  name: Icons;
  title?: string;
  stroke?: string;
  fill?: string;
  hoverFill?: string;
  hoverStroke?: string;
  strokeWidth?: string;
  className?: string;
  style?: any;
  onClick?: (e?: any) => void;
};

const Icon: React.FC<Props> = ({name, ...rest}) => {
  return <div {...rest}>{React.createElement(icons[name])}</div>;
};

export default Icon;