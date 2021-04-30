import styled from 'styled-components';
import Wrapper from '../components/wrapper';

const HomeStyles = styled.div`
  .title {
    background: green;
  }
`;

export default function Home() {
  return (
    <HomeStyles>
      <Wrapper>
        <div className="title">Why am I green??????</div>
      </Wrapper>
    </HomeStyles>
  );
}
