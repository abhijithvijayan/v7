import React from 'react';

const PatreonIcon: React.FC = () => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="patreon"
      className="patreon-brands_svg__svg-inline--fa patreon-brands_svg__fa-patreon patreon-brands_svg__fa-w-16"
      viewBox="0 0 512 512"
      height={19}
      width={19}
    >
      <path
        fill="currentColor"
        d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"
      />
    </svg>
  );
};

export default React.memo(PatreonIcon);
