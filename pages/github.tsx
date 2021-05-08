import * as React from 'react';

import {SocialLinks} from '../config';

const GitHubRedirect: React.FC = () => {
  React.useLayoutEffect(() => {
    window.location.href = SocialLinks.GitHub;
  }, []);

  return <div />;
};

export default GitHubRedirect;
