import React from 'react';
// Remove on: https://github.com/ben-rogerson/twin.macro/issues/51
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import tw from 'twin.macro';

const BodyWrapper: React.FC = ({children}) => {
  return (
    <>
      <div tw="relative min-h-screen">
        <main tw="w-full min-h-screen">{children}</main>
      </div>
    </>
  );
};

export default BodyWrapper;
