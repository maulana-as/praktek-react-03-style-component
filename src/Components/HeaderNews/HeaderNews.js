import React from 'react';
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderCardSection,
  HeaderSmallCardSection,
  ImgCard,
  HeaderCard,
  HeaderCardItems,
  HeaderCardTitle,
} from '../../Styles/Header';
import cardHeaderOne from '../../Images/card-small-one-header.jpeg';
import cardHeaderTwo from '../../Images/card-small-two-header.jpeg';
import cardHeaderThree from '../../Images/card-small-three-header.jpeg';
import cardHeaderFour from '../../Images/card-small-four-header.png';
import cardHeaderFive from '../../Images/card-small-five-header.jpeg';

const HeaderNews = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderCardSection>
          <HeaderSmallCardSection>
            <HeaderCard>
              <ImgCard src={cardHeaderOne} alt="card-one-news" />
            </HeaderCard>
            <HeaderCardItems>
              <HeaderCardTitle>
                Bukalapak IPO, Achmad Zaky Jadi Crazy Rich Berharta Rp 4,7 T
              </HeaderCardTitle>
            </HeaderCardItems>
          </HeaderSmallCardSection>
          <HeaderSmallCardSection>
            <HeaderCard>
              <ImgCard src={cardHeaderTwo} alt="card-two-news" />
            </HeaderCard>
            <HeaderCardItems>
              <HeaderCardTitle>
                Hasil MotoGP Styria: Jorge Martin Juara!
              </HeaderCardTitle>
            </HeaderCardItems>
          </HeaderSmallCardSection>
          <HeaderSmallCardSection>
            <HeaderCard>
              <ImgCard src={cardHeaderThree} alt="card-one-news" />
            </HeaderCard>
            <HeaderCardItems>
              <HeaderCardTitle>
                Messi: Saya Belum Tanda Tangan Kontrak dengan Klub Manapun
              </HeaderCardTitle>
            </HeaderCardItems>
          </HeaderSmallCardSection>
          <HeaderSmallCardSection>
            <HeaderCard>
              <ImgCard src={cardHeaderFour} alt="card-one-news" />
            </HeaderCard>
            <HeaderCardItems>
              <HeaderCardTitle>
                Tes Otak Penutup Weekend, Bisa Pecahkan Teka-teki Ini?
              </HeaderCardTitle>
            </HeaderCardItems>
          </HeaderSmallCardSection>
          <HeaderSmallCardSection>
            <HeaderCard>
              <ImgCard src={cardHeaderFive} alt="card-one-news" />
            </HeaderCard>
            <HeaderCardItems>
              <HeaderCardTitle>
                Pemimpin HMI Muis yang Disebut Hilang Kontak Sudah Ditemukan
              </HeaderCardTitle>
            </HeaderCardItems>
          </HeaderSmallCardSection>
        </HeaderCardSection>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default HeaderNews;
