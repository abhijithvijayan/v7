import tw from 'twin.macro';

import Card from '../components/Card';
import BodyWrapper from '../components/BodyWrapper';

export default function Home(): JSX.Element {
  return (
    <BodyWrapper>
      <section id="hero" tw="h-screen">
        <div tw="w-full h-full bg-gray-900">
          <Card />
        </div>
      </section>
    </BodyWrapper>
  );
}
