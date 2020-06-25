import React, {useEffect} from 'react';

import {SocialLinks} from '../config';

const PayPalRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = SocialLinks.PayPal;
  }, []);

  return <div />;
};

export default PayPalRedirect;
