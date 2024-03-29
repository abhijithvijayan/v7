import {AppContext} from 'next/app';
import * as React from 'react';
import Link from 'next/link';

import Icon from '../components/Icon';
import BodyWrapper from '../components/BodyWrapper';
import Card, {CardHeader, CardBody, CardFooter} from '../components/Card';

import {SiteProps, Routes, getFullLink} from '../config';

type DonatePageProps = Props['props'];

const DonatePage: React.FC<DonatePageProps> = ({redirectAppURL}) => {
  return (
    <BodyWrapper>
      <section id="donate">
        <div className={'wrapper'}>
          <Card>
            <CardHeader>
              <div className={'header-wrapper'}>
                <h2 className={'main-text'}>Donate ❤️</h2>
                <div className={'subsection'}>
                  <div className={'image-wrapper'}>
                    <img
                      alt="..."
                      src={SiteProps.Profile}
                      width={999}
                      height={1008}
                    />
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardBody>
              <div className={'body-content-wrapper'}>
                <p className={'long-tagline'}>
                  I am a student, tutor, engineer and a maker to various
                  projects. For 3+ years, I have been working on Open Source.
                  <br />
                  <br />
                  If you use any of my projects or like what I&#39;m doing,
                  please consider backing me with simple donations so that I can
                  continue{' '}
                  <a
                    href={getFullLink(redirectAppURL, Routes.GitHub)}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    my open source work.
                  </a>
                  <br />
                  <br />
                  <strong>Thank you for your support! 🙌</strong>
                </p>
                <h3 className={'sub-header'}>Monthly Donations</h3>
                <ul>
                  <li>
                    <a
                      className={'hover:bg-gray-100'}
                      href={getFullLink(redirectAppURL, Routes.GitHubSponsors)}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon name="github" className={'icon'} />
                      <div className={'text-wrapper'}>
                        <p className={'hover:text-gray-800'}>GitHub Sponsors</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className={'hover:bg-gray-100'}
                      href={getFullLink(redirectAppURL, Routes.OpenCollective)}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon name="circle-notch" className={'icon'} />
                      <div className={'text-wrapper'}>
                        <p className={'hover:text-gray-800'}>Open Collective</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className={'hover:bg-gray-100'}
                      href={getFullLink(redirectAppURL, Routes.Patreon)}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon name="patreon" className={'icon'} />
                      <div className={'text-wrapper'}>
                        <p className={'hover:text-gray-800'}>Patreon</p>
                      </div>
                    </a>
                  </li>
                </ul>

                <h3 className={'sub-header'}>One-time Donations</h3>

                <ul>
                  <li>
                    <a
                      className={'hover:bg-gray-100'}
                      href={getFullLink(redirectAppURL, Routes.PayPal)}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon name="paypal" className={'icon'} />
                      <div className={'text-wrapper'}>
                        <p className={'hover:text-gray-800'}>My PayPal</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className={'hover:bg-gray-100'}
                      href={getFullLink(redirectAppURL, Routes.BuyMeACoffee)}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon name="coffee" className={'icon'} />
                      <div className={'text-wrapper'}>
                        <p className={'hover:text-gray-800'}>
                          BuyMeACoffee.com
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </CardBody>

            <CardFooter>
              <Link
                href="/"
                className={'hover:text-gray-800 text-gray-700'}
                title="Go Back"
                legacyBehavior={false}
              >
                <Icon name="arrow-left" />
              </Link>
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

export default DonatePage;
