import React, {useEffect} from 'react';

import {SocialLinks} from '../config';

const WritingsRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = SocialLinks.Medium;
  }, []);

  return <div />;
};

export default WritingsRedirect;
