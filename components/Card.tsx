import React from 'react';
// Remove on: https://github.com/ben-rogerson/twin.macro/issues/51
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import tw from 'twin.macro';

export const CardHeader: React.FC = ({children}) => {
  return <>{children}</>;
};

export const CardBody: React.FC = ({children}) => {
  return (
    <>
      <div tw="px-2">{children}</div>
    </>
  );
};

export const CardFooter: React.FC = ({children}) => {
  return (
    <>
      <div tw="flex flex-wrap pt-3 mx-6 border-t">{children}</div>
    </>
  );
};

const Card: React.FC = ({children}) => {
  return (
    <>
      <div tw="container h-full px-4 mx-auto">
        <div tw="flex items-center content-center justify-center h-full">
          <div tw="w-full px-4">
            <div tw="md:max-w-sm items-center justify-center w-full pb-6 mx-auto my-12 overflow-hidden bg-white rounded-lg shadow-sm">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
