import * as React from 'react';

import {SocialLinks} from '../config';

const BlogRedirect: React.FC = () => {
  React.useEffect(() => {
    window.location.href = SocialLinks.Medium;
  }, []);

  return <div />;
};

export default BlogRedirect;
