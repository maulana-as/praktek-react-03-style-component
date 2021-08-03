import styled from "styled-components";
import { Container } from "../Globalstyles";

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

export const HeaderCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 130px;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  transition: all 0.5s ease;
  margin-bottom: 4rem;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 1200px) {
    width: 397px;
    margin-right: 5rem;
  }
  @media only screen and (max-width: 1000px) {
    width: 420px;
    margin-right: 2.5rem;
  }

  @media only screen and (max-width: 700px) {
    width: 380px;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media only screen and (max-width: 500px) {
    margin-right: 0;
    &:hover {
      transform: scale(1);
    }
  }
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    width: 280px;
  }
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
justify-content:space-evenly;
align-items:center;   
height: 40px;
margin-top: -6rem;
border-radius: 5px;      
width: 82%;                                                                                           
@media only screen and (max-width:1225px){
    width: 100%
}
@media only screen and (max-width:450px){
    display: flex;
}                                                   
`;

export const HeaderMenuAnchor = styled.div`
@media only screen and (max-widt:930px ) { 
    font-weight: bold;
    font-size: 12px;
}
@media only screen and (max-width: 700px){
    font-size: 8.2px;
}
`

export const NewsFeature = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 650px;
height: 320px;
background-color: #fff;
box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.18);
border-radius: 40px;
transition: all .4s ease;
margin-bottom: 5rem;
cursor: pointer;

@media only screen and (min-width: 1800px){
    margin-right: 10rem;
    padding: 0;
}

&:hover{
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.12);
    transform: scale(1.05);
    background-color: #333;
    color: #fff;
}

@media only screen and (min-width:1000px) {
    flex-direction: row;
}
@media only screen and (max-width:900px){
    margin-bottom: 10rem;
}
@media only screen and (max-width:700px){
    width: 550px;
    margin-bottom: 3rem;
    &:hover{
        transform: scale(1.02);
    }
}
@media only screen and (max-width:600px){
    width: 500px;
}
@media only screen and (max-width:500px){
    width: 380px;
    height: 300px;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.10);

}
@media only screen and (max-width:400px){
    width: 330px;
}
`;