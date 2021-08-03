import React from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderContentContainer,
  HeaderCardSection,
  HeaderSmallCard,
  Img,
  ImgBanner
} from "../../Styles/Header";
import DetikImgBanner from "../../Images/logodetikcom.png";
import BannerAds from "../../Images/weatherads-blue-small-banner.png"

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderContentContainer>
            <HeaderCardSection>
              <HeaderSmallCard>
               <Img src={DetikImgBanner} alt="Logo" />
              </HeaderSmallCard>
              <HeaderSmallCard>
              <ImgBanner className="img-fluid" src={BannerAds} alt="Banner" />
              </HeaderSmallCard>
            </HeaderCardSection>
          </HeaderContentContainer>
        </HeaderContainer>
      </HeaderWrapper>
    </div>
  );
};

export default Header;
