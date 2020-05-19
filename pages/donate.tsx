// Remove on: https://github.com/ben-rogerson/twin.macro/issues/51
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import tw from 'twin.macro';
import Link from 'next/link';

import Icon from '../components/Icon';
import BodyWrapper from '../components/BodyWrapper';
import Card, {CardHeader, CardBody, CardFooter} from '../components/Card';

export default function Home(): JSX.Element {
  return (
    <BodyWrapper>
      <section id="donate" tw="block">
        <div tw="flex flex-col justify-center w-full h-full min-h-screen bg-gray-900">
          <Card tw="w-full mx-6">
            <CardHeader>
              <div tw="py-3">
                <h2 tw="text-3xl font-semibold mx-6 text-gray-800 mt-2 mb-1">
                  Donate ❤️
                </h2>
                <div tw="relative flex flex-wrap mx-6 border-t">
                  <div tw="absolute right-0 w-10 mx-auto mr-2 -my-5 overflow-hidden border-4 border-white rounded-full shadow">
                    <img
                      alt="unicorn"
                      tw="object-cover w-full h-full"
                      src="/unicorn.png"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div tw="mx-4 my-2">
                <p tw="text-gray-700">
                  I am a student, tutor, engineer and a maker to various
                  projects. For 2+ years, I have been working on Open Source.
                  <br />
                  <br />
                  If you use any of my projects or like what I&#39;m doing,
                  please consider backing me with simple donations so that I can
                  continue{' '}
                  <a
                    href="https://github.com/abhijithvijayan"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    my open source work.
                  </a>
                  <br />
                  <br />
                  <strong>Thank you for your support! 🙌</strong>
                </p>
                <h3 tw="text-2xl font-semibold text-gray-800 mt-2">
                  Monthly Donations
                </h3>
                <ul>
                  <li>
                    <a
                      tw="hover:bg-gray-100 flex items-center px-4 py-1"
                      href="https://github.com/sponsors/abhijithvijayan"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon name="github" tw="text-gray-800" />
                      <div tw="pl-3">
                        <p tw="my-0 text-sm font-medium leading-none text-gray-800">
                          GitHub Sponsors
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      tw="hover:bg-gray-100 flex items-center px-4 py-1"
                      href="https://www.patreon.com/abhijithvijayan"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon name="patreon" tw="text-gray-800" />
                      <div tw="pl-3">
                        <p tw="my-0 text-sm font-medium leading-none text-gray-800">
                          Patreon
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      tw="hover:bg-gray-100 flex items-center px-4 py-1"
                      href="https://opencollective.com/abhijithvijayan"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon name="circle-notch" tw="text-gray-800" />
                      <div tw="pl-3">
                        <p tw="my-0 text-sm font-medium leading-none text-gray-800">
                          Open Collective
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
                <h3 tw="text-2xl font-semibold text-gray-800 mt-2">
                  One-time Donations
                </h3>
                <ul>
                  <li>
                    <a
                      tw="hover:bg-gray-100 flex items-center px-4 py-1"
                      href="https://www.paypal.me/iamabhijithvijayan"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon name="paypal" tw="text-gray-800" />
                      <div tw="pl-3">
                        <p tw="my-0 text-sm font-medium leading-none text-gray-800">
                          My PayPal
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      tw="hover:bg-gray-100 flex items-center px-4 py-1"
                      href="https://www.buymeacoffee.com/abhijithvijayan"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon name="coffee" tw="text-gray-800" />
                      <div tw="pl-3">
                        <p tw="my-0 text-sm font-medium leading-none text-gray-800">
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
                  tw="hover:text-gray-800 inline-flex items-center px-3 py-1 text-xs font-bold leading-snug text-gray-700 uppercase bg-white border rounded-full cursor-pointer"
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
