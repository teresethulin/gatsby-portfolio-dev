import styled from 'styled-components';

export const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;

  @media (min-width: 960px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
    }
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #2e2eff;
  }

  p {
    margin-bottom: 4rem;
    font-size: 18pt;
    font-weight: normal;
    line-height: 1.3;
    color: #2e2eff;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 25vw;
    margin-right: 2vw;
  }

  @media (max-width: 960px) {
    margin-bottom: 2rem;
    width: 100%;

    img {
      width: 70%;
      height: auto;
      margin-bottom: 5vh;
    }
  }
`;
