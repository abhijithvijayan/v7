import * as React from 'react';

import {SocialLinks} from '../config';

const GitHubRedirect: React.FC = () => {
  React.useEffect(() => {
    window.location.href = SocialLinks.GitHub;
  }, []);

  return <div />;
};

export default GitHubRedirect;
