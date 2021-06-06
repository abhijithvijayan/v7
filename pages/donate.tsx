import * as React from 'react';
import Link from 'next/link';

import Icon from '../components/Icon';
import BodyWrapper from '../components/BodyWrapper';
import Card, {CardHeader, CardBody, CardFooter} from '../components/Card';

import {SiteProps, SocialLinks, Routes} from '../config';

export default function Home(): JSX.Element {
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
                    href={Routes.GitHub}
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
                      href={Routes.OpenCollective}
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
                      href={Routes.Patreon}
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
                      href={Routes.PayPal}
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
                      href={Routes.BuyMeACoffee}
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
              <Link href="/">
                <a
                  className={'hover:text-gray-800 text-gray-700'}
                  title="Go Back"
                >
                  <Icon name="arrow-left" />
                </a>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </BodyWrapper>
  );
}
