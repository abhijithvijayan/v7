import * as React from 'react';

import {SocialLinks} from '../config';

const WritingsRedirect: React.FC = () => {
  React.useLayoutEffect(() => {
    window.location.href = SocialLinks.Medium;
  }, []);

  return <div />;
};

export default WritingsRedirect;
