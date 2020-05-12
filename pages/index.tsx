import styled from 'styled-components';
import {Theme} from './_app';

const StyledHeader = styled.h3`
  font-size: 20px;
  color: ${({theme}: {theme: Theme}): string => theme.purple};
`;

export default function Home(): JSX.Element {
  return (
    <div>
      <main>
        <StyledHeader>Abhijith Vijayan</StyledHeader>
      </main>

      <footer />
    </div>
  );
}
