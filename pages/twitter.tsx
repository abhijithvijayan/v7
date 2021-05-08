import * as React from 'react';

import {SocialLinks} from '../config';

const TwitterRedirect: React.FC = () => {
  React.useEffect(() => {
    window.location.href = SocialLinks.Twitter;
  }, []);

  return <div />;
};

export default TwitterRedirect;
