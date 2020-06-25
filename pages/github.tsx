import React, {useEffect} from 'react';

import {SocialLinks} from '../config';

const GitHubRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = SocialLinks.GitHub;
  }, []);

  return <div />;
};

export default GitHubRedirect;
