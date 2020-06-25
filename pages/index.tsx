import 'twin.macro';
import Link from 'next/link';
import Icon from '../components/Icon';
import BodyWrapper from '../components/BodyWrapper';
import Card, {CardHeader, CardBody, CardFooter} from '../components/Card';

import {SiteProps, Routes} from '../config';

export default function Home(): JSX.Element {
  return (
    <BodyWrapper>
      <section id="hero" tw="block">
        <div tw="flex flex-col justify-center w-full h-full min-h-screen bg-gray-900">
          <Card>
            <CardHeader>
              <div tw="relative h-40">
                <img
                  tw="absolute object-cover w-full h-full"
                  alt="background-header"
                  src={SiteProps.Cover}
                  width={1384}
                  height={777}
                />
              </div>
              <div tw="relative w-24 h-24 mx-auto -my-12 overflow-hidden border-4 border-white rounded-full shadow">
                <img
                  tw="object-cover w-full h-full"
                  alt="profile-header"
                  src={SiteProps.Profile}
                  width={999}
                  height={1008}
                />
              </div>
            </CardHeader>
            <CardBody>
              <div tw="mt-16 mb-6">
                <h1 tw="text-lg font-semibold text-center">Abhijith Vijayan</h1>
                <p tw="text-sm text-center text-gray-600 select-none">
                  I build things that aren&#39;t evil.
                </p>
                <div tw="flex flex-wrap justify-center mt-5">
                  <a
                    title="Code"
                    href={Routes.GitHub}
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
                    href={Routes.Twitter}
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
                    href={Routes.LinkedIn}
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
                    href={Routes.Writings}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Icon
                      name="pencil"
                      tw="hover:text-orange-800 inline-flex items-center px-3 py-1 text-xs font-bold leading-snug text-orange-500 uppercase bg-teal-200 rounded-full"
                    />
                  </a>
                  <Link href={Routes.Donate}>
                    <a title="Donate" tw="ml-4 cursor-pointer">
                      <Icon
                        name="donate"
                        tw="hover:text-gray-800 inline-flex items-center px-3 py-1 text-xs font-bold leading-snug text-gray-700 uppercase bg-white border rounded-full"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <h1 tw="w-full font-semibold text-center text-gray-700 select-none">
                I’m currently available for freelance work.
              </h1>

              <p tw="text-sm text-center text-gray-600 select-none">
                My inbox is always open whether for a potential project or just
                to say hi, so here is my{' '}
                <a
                  tw="hover:border-b-2 hover:text-gray-700 font-semibold text-gray-600"
                  href={`mailto:${SiteProps.Email}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Email !
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </BodyWrapper>
  );
}
