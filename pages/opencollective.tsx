import React, {useEffect} from 'react';

import {SocialLinks} from '../config';

const OpenCollectiveRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = SocialLinks.OpenCollective;
  }, []);

  return <div />;
};

export default OpenCollectiveRedirect;
