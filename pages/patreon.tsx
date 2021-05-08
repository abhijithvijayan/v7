import * as React from 'react';

import {SocialLinks} from '../config';

const PatreonRedirect: React.FC = () => {
  React.useEffect(() => {
    window.location.href = SocialLinks.Patreon;
  }, []);

  return <div />;
};

export default PatreonRedirect;
