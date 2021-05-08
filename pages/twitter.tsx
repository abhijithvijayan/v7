import * as React from 'react';

import {SocialLinks} from '../config';

const TwitterRedirect: React.FC = () => {
  React.useLayoutEffect(() => {
    window.location.href = SocialLinks.Twitter;
  }, []);

  return <div />;
};

export default TwitterRedirect;
