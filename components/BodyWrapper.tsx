import React from 'react';
import tw from 'twin.macro';

const BodyWrapper: React.FC = ({children}) => {
  return (
    <>
      <div tw="w-full">
        <main>{children}</main>
      </div>
    </>
  );
};

export default BodyWrapper;
