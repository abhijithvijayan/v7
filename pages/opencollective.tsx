import * as React from 'react';

import {SocialLinks} from '../config';

const OpenCollectiveRedirect: React.FC = () => {
  React.useLayoutEffect(() => {
    window.location.href = SocialLinks.OpenCollective;
  }, []);

  return <div />;
};

export default OpenCollectiveRedirect;
