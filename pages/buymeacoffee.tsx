import * as React from 'react';

import {SocialLinks} from '../config';

const BuyMeACoffeeRedirect: React.FC = () => {
  React.useEffect(() => {
    window.location.href = SocialLinks.BuyMeACoffee;
  }, []);

  return <div />;
};

export default BuyMeACoffeeRedirect;
