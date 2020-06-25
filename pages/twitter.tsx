import React, {useEffect} from 'react';

import {SocialLinks} from '../config';

const TwitterRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = SocialLinks.Twitter;
  }, []);

  return <div />;
};

export default TwitterRedirect;
