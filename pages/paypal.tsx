import * as React from 'react';

import {SocialLinks} from '../config';

const PayPalRedirect: React.FC = () => {
  React.useEffect(() => {
    window.location.href = SocialLinks.PayPal;
  }, []);

  return <div />;
};

export default PayPalRedirect;
