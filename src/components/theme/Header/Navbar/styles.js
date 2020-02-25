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
    width: 8vw;
    margin-left: 1vw;
    margin-bottom: 1vh;
    align-self: center;
  }

  h4 {
    margin: 0;
  }

  @media (min-width: 600px) {
    img {
      max-width: 6vw;
    }
    h4 {
      font-size: 1rem;
    }

    @media (min-width: 980px) {
      img {
        width: 4vw;
      }
      h4 {
        font-size: 1.4rem;
      }
    }
  }
`;
