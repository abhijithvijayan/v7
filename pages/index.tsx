import {AppContext} from 'next/app';
import * as React from 'react';
import Link from 'next/link';

import Card, {CardHeader, CardBody, CardFooter} from '../components/Card';
import BodyWrapper from '../components/BodyWrapper';
import Icon from '../components/Icon';

import {SiteProps, Routes, getFullLink} from '../config';

type HomePageProps = Props['props'];

const HomePage: React.FC<HomePageProps> = ({redirectAppURL}) => {
  return (
    <BodyWrapper>
      <section id="hero">
        <div className={'wrapper'}>
          <Card>
            <CardHeader>
              <div className={'cover-image'}>
                <img
                  alt="..."
                  src={SiteProps.Cover}
                  width={1384}
                  height={777}
                />
              </div>
              <div className={'profile-image'}>
                <img
                  alt="..."
                  src={SiteProps.Profile}
                  width={999}
                  height={1008}
                />
              </div>
            </CardHeader>

            <CardBody>
              <div className={'body-content-wrapper'}>
                <h1 className={'title'}>{SiteProps.Name}</h1>
                <p className={'tagline'}>{SiteProps.Description}</p>
                <div className={'social-links'}>
                  <a
                    title="Code"
                    href={getFullLink(redirectAppURL, Routes.GitHub)}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Icon
                      name="github"
                      className={'hover:text-gray-800 text-gray-700 github'}
                    />
                  </a>
                  <a
                    title="Tweets"
                    href={getFullLink(redirectAppURL, Routes.Twitter)}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Icon
                      name="twitter"
                      className={'hover:text-blue-800 text-blue-700 twitter'}
                    />
                  </a>
                  <a
                    title="Hire"
                    href={getFullLink(redirectAppURL, Routes.LinkedIn)}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Icon
                      name="linkedin"
                      className={'hover:text-gray-800 text-gray-700 linkedin'}
                    />
                  </a>
                  <a
                    title="Medium"
                    href={getFullLink(redirectAppURL, Routes.Medium)}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Icon
                      name="pencil"
                      className={'hover:text-orange-800 text-orange-500 pencil'}
                    />
                  </a>
                  <Link
                    href={Routes.Donate}
                    title="Donate"
                    legacyBehavior={false}
                  >
                    <Icon
                      name="donate"
                      className={'hover:text-gray-800 text-gray-700 donation'}
                    />
                  </Link>
                </div>
              </div>
            </CardBody>

            <CardFooter>
              <h1 className={'subtext'}>-\_(''/)_/-</h1>

              <p className={'detailed'}>
                My inbox is always open whether for a potential project or just
                to say hi, so here is my{' '}
                <a
                  className={'hover:text-gray-700 text-gray-600 email'}
                  href={`mailto:${SiteProps.Email}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Email !
                </a>
                <p className={'quote'}>
                  "Life is like a game of chess, you can't take moves back. All
                  you can do is look at the board you are in, look at the
                  position you are in and make the best moves possible."
                </p>
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </BodyWrapper>
  );
};

type Props = {
  props: {
    redirectAppURL: string | null;
  };
};

// This function gets called at build time on server-side.
// It won't be called on client-side
export async function getStaticProps(_: AppContext): Promise<Props> {
  return {
    props: {
      // eslint-disable-next-line no-undef
      redirectAppURL: process.env.NEXT_PUBLIC_REDIRECT_APP_URL ?? null,
    },
  };
}

export default HomePage;
