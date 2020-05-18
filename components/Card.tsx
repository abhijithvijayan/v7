import React from 'react';
import tw from 'twin.macro';

const Card: React.FC = () => {
  return (
    <>
      <div tw="container h-full px-4 mx-auto">
        <div tw="flex items-center content-center justify-center h-full">
          <div tw="w-full px-4 pt-32">
            <div tw="md:max-w-sm items-center justify-center w-full pb-6 mx-auto my-12 overflow-hidden bg-white rounded-lg shadow-sm">
              <div tw="relative h-40">
                <img
                  tw="absolute object-cover w-full h-full"
                  alt="background-header"
                  src="/activity.png"
                />
              </div>
              <div tw="relative w-24 h-24 mx-auto -my-12 overflow-hidden border-4 border-white rounded-full shadow">
                <img
                  tw="object-cover w-full h-full"
                  alt="profile-header"
                  src="/unicorn.png"
                />
              </div>
              <div tw="mt-16">
                <h1 tw="text-lg font-semibold text-center">Abhijith Vijayan</h1>
                <p tw="text-sm text-center text-gray-600">
                  I build things that aren&#39;t evil.
                </p>
              </div>
              <div tw="flex flex-wrap pt-3 mx-6 mt-6 border-t">
                <div tw="hover:bg-indigo-600 hover:text-indigo-100 px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default">
                  TypeScript
                </div>
                <div tw="hover:bg-indigo-600 hover:text-indigo-100 px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default">
                  React
                </div>
                <div tw="hover:bg-indigo-600 hover:text-indigo-100 px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default">
                  NodeJS
                </div>
                <div tw="hover:bg-indigo-600 hover:text-indigo-100 px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default">
                  Flask
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
