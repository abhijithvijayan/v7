import React, {useEffect} from 'react';

import {SocialLinks} from '../config';

const LinkedInRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = SocialLinks.LinkedIn;
  }, []);

  return <div />;
};

export default LinkedInRedirect;
