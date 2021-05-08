import * as React from 'react';

import {SocialLinks} from '../config';

const PatreonRedirect: React.FC = () => {
  React.useLayoutEffect(() => {
    window.location.href = SocialLinks.Patreon;
  }, []);

  return <div />;
};

export default PatreonRedirect;
