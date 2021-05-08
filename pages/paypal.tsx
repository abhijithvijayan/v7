import * as React from 'react';

import {SocialLinks} from '../config';

const PayPalRedirect: React.FC = () => {
  React.useLayoutEffect(() => {
    window.location.href = SocialLinks.PayPal;
  }, []);

  return <div />;
};

export default PayPalRedirect;
