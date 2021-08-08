import styled from 'styled-components';
import { Container } from '../Globalstyles';

export const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  ${Container};
`;

export const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderCardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

export const HeaderSmallCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1200px) {
    margin-left: 2rem;
  }
  @media only screen and (min-width: 1500px) {
    margin-left: 3.5rem;
  }
`;

export const HeaderSmallCardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin: auto -2.9rem;
`;

export const HeadLineNews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

// &:hover {
//   background-color: #333;
//   color: #fff;
//   transform: scale(1.05);
//   box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
// }

// @media only screen and (max-width: 1200px) {
//   width: 397px;
//   margin-right: 2rem;
// }
// @media only screen and (max-width: 1000px) {
//   width: 420px;
//   margin-right: 2.5rem;
// }

// @media only screen and (max-width: 700px) {
//   width: 380px;
//   &:hover {
//     transform: scale(1.1);
//   }
// }

// @media only screen and (max-width: 500px) {
//   margin-right: 0;
//   &:hover {
//     transform: scale(1);
//   }
// }
// @media only screen and (max-width: 400px) {
//   flex-direction: column;
//   width: 280px;
// }

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 220px;
  height: 180px;
  background: transparent;
  transition: all 0.5s ease;
  margin: -5rem 3.3rem;
  cursor: pointer;
`;

export const Img = styled.img`
  margin-top: 2rem;
  height: 7rem;
  transition: all 0.5s ease;

  @media only screen and (max-width: 1000px) {
    margin-top: 0rem;
    height: 9rem;
  }

  @media only screen and (max-width: 600px) {
    margin-top: -20px;
    height: 6rem;
  }

  @media only screen and (max-width: 400px) {
    margin-top: -20px;
    height: 5rem;
  }
`;

export const ImgBanner = styled.img`
  margin-top: -58px;
  padding: 12px;
  height: 18rem;
  transition: all 0.5s ease;

  @media only screen and (max-width: 1000px) {
    margin-top: 2rem;
    height: 16rem;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 22px;
    height: 13rem;
  }

  @media only screen and (max-width: 400px) {
    margin-top: 22px;
    height: 13rem;
  }
`;

export const HeaderTabContainer = styled.div`
  color: #fff;
  display: flex;
  background-color: #244b9c;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  margin-top: -6rem;
  border-radius: 5px;
  width: 82%;
  @media only screen and (max-width: 1225px) {
    width: 100%;
  }
  @media only screen and (max-width: 450px) {
    display: flex;
  }
`;

export const HeaderMenuAnchor = styled.div`
  @media only screen and (max-widt: 930px) {
    font-weight: bold;
    font-size: 12px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 8.2px;
  }
`;

export const ImgCard = styled.img`
  height: 18vh;
  width: 100%;
  transition: width 2s, height 4s;
  border-radius: 10px;

  @media only screen and (max-width: 1000px) {
    margin-top: 0rem;
    height: 9rem;
  }

  @media only screen and (max-width: 600px) {
    margin-top: -20px;
    height: 6rem;
  }

  @media only screen and (max-width: 400px) {
    margin-top: -20px;
    height: 5rem;
  }
`;

export const ImgHeadLine = styled.img`
  height: 82vh;
  width: 100%;
  transition: width 2s, height 4s;
  border-radius: 10px;
  @media only screen and (max-width: 1000px) {
    margin-top: 0rem;
    height: 9rem;
  }

  @media only screen and (max-width: 600px) {
    margin-top: -20px;
    height: 6rem;
  }

  @media only screen and (max-width: 400px) {
    margin-top: -20px;
    height: 5rem;
  }
`;

export const HeaderCardItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 100px;
  margin: 1.2rem auto;
`;

export const HeaderCardTitle = styled.h5`
  font-size: 0.9rem;
  margin-left: -0.6rem;
  @media only screen and (max-width: 700px) {
    font-size: 0.7rem;
    margin-left: -0.6rem;
  }
`;
