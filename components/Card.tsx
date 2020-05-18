import React from 'react';
import tw from 'twin.macro';

const Card: React.FC = () => {
  return (
    <>
      <div tw="container mx-auto px-4 h-full">
        <div tw="flex content-center items-center justify-center h-full">
          <div tw="w-full px-4 pt-32">
            <div tw="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
              <div tw="relative h-40">
                <img
                  alt="background-header"
                  tw="absolute h-full w-full object-cover"
                  src="/activity.png"
                />
              </div>
              <div tw="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                <img
                  alt="profile-header"
                  tw="object-cover w-full h-full"
                  src="/unicorn.png"
                />
              </div>
              <div tw="mt-16">
                <h1 tw="text-lg text-center font-semibold">Abhijith Vijayan</h1>
                <p tw="text-sm text-gray-600 text-center">
                  I build things that aren&#39;t evil.
                </p>
              </div>
              <div tw="mt-6 pt-3 flex flex-wrap mx-6 border-t">
                <div tw="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                  TypeScript
                </div>
                <div tw="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                  React
                </div>
                <div tw="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                  NodeJS
                </div>
                <div tw="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
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
