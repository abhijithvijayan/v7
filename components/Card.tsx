import React from 'react';
// Remove on: https://github.com/ben-rogerson/twin.macro/issues/51
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import tw from 'twin.macro';
import Link from 'next/link';

import Icon from './Icon';

const CardHeader: React.FC = () => {
  return (
    <>
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
    </>
  );
};

const CardBody: React.FC = () => {
  return (
    <>
      <div tw="mt-16">
        <h1 tw="text-lg font-semibold text-center">Abhijith Vijayan</h1>
        <p tw="text-sm text-center text-gray-600 select-none">
          I build things that aren&#39;t evil.
        </p>
        <div tw="flex flex-wrap justify-center mt-5">
          <a
            title="Code"
            href="https://github.com/abhijithvijayan/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Icon
              name="github"
              tw="hover:text-gray-800 inline-flex items-center px-3 py-1 text-xs font-bold leading-snug text-gray-700 uppercase bg-gray-200 rounded-full"
            />
          </a>
          <a
            tw="ml-4"
            title="Tweets"
            href="https://twitter.com/_abhijithv"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Icon
              name="twitter"
              tw="hover:text-blue-800 inline-flex items-center px-3 py-1 text-xs font-bold leading-snug text-blue-700 uppercase bg-blue-200 rounded-full"
            />
          </a>
          <a
            tw="ml-4"
            title="Hire"
            href="https://www.linkedin.com/in/iamabhijithvijayan/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Icon
              name="linkedin"
              tw="hover:text-gray-800 inline-flex items-center px-3 py-1 text-xs font-bold leading-snug text-gray-700 uppercase bg-green-200 rounded-full"
            />
          </a>
          <a
            tw="ml-4"
            title="Writings"
            href="https://medium.com/@abhijithvijayan"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Icon
              name="pencil"
              tw="hover:text-orange-800 inline-flex items-center px-3 py-1 text-xs font-bold leading-snug text-orange-500 uppercase bg-teal-200 rounded-full"
            />
          </a>
          <Link href="/donate">
            <a title="Donate" tw="ml-4 cursor-pointer">
              <Icon
                name="donate"
                tw="hover:text-gray-800 inline-flex items-center px-3 py-1 text-xs font-bold leading-snug text-gray-700 uppercase bg-white border rounded-full"
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

const CardFooter: React.FC = () => {
  return (
    <>
      <div tw="flex flex-wrap pt-3 mx-6 mt-6 border-t">
        <h1 tw="w-full font-semibold text-center text-gray-700 select-none">
          I’m currently available for freelance work.
        </h1>

        <p tw="text-sm text-center text-gray-600 select-none">
          My inbox is always open whether for a potential project or just to say
          hi, so here is my{' '}
          <a
            tw="hover:border-b-2 hover:text-gray-700 font-semibold text-gray-600"
            href="mailto:iam@abhijithvijayan.in"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Email !
          </a>
        </p>
      </div>
    </>
  );
};

const Card: React.FC = () => {
  return (
    <>
      <div tw="container h-full px-4 mx-auto">
        <div tw="flex items-center content-center justify-center h-full">
          <div tw="w-full px-4">
            <div tw="md:max-w-sm items-center justify-center w-full pb-6 mx-auto my-12 overflow-hidden bg-white rounded-lg shadow-sm">
              <CardHeader />
              <CardBody />
              <CardFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
