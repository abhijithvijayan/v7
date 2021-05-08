import * as React from 'react';

import {SocialLinks} from '../config';

const OpenCollectiveRedirect: React.FC = () => {
  React.useEffect(() => {
    window.location.href = SocialLinks.OpenCollective;
  }, []);

  return <div />;
};

export default OpenCollectiveRedirect;
