import styled from 'styled-components';

const WrapperStyles = styled.div`
  .title {
    background: red;
  }
`;

export default function Wrapper(props) {
  return <WrapperStyles {...props} />;
}
