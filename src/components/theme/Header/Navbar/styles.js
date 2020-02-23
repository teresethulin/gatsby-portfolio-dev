import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #2e2eff;
  }
`;

export const LogoWrapper = styled.div`
  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
  }

  img {
    width: 10vw;
    align-self: center;
    margin-bottom: 1vh;

    @media (min-width: 600px) {
      max-width: 8vw;
    }

    @media (min-width: 980px) {
      width: 5vw;
    }
  }
`;
