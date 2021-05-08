import * as React from 'react';

import {SocialLinks} from '../config';

const LinkedInRedirect: React.FC = () => {
  React.useEffect(() => {
    window.location.href = SocialLinks.LinkedIn;
  }, []);

  return <div />;
};

export default LinkedInRedirect;
