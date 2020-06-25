import React, {useEffect} from 'react';

import {SocialLinks} from '../config';

const PatreonRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = SocialLinks.Patreon;
  }, []);

  return <div />;
};

export default PatreonRedirect;
