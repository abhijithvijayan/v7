import React, {useEffect} from 'react';

import {SocialLinks} from '../config';

const BuyMeACoffeeRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = SocialLinks.BuyMeACoffee;
  }, []);

  return <div />;
};

export default BuyMeACoffeeRedirect;
