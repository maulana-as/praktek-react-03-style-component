import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderCardSection,
  HeadLineNews,
  ImgHeadLine,
} from '../../Styles/Header';
import HeadLines from '../../Images/headline-news.png';
import NewsFeed from '../NewsFeed.js';

export default function Headline() {
  const [newsFeeds, setNewsFeeds] = useState([
    {
      image:
        'https://akcdn.detik.net.id/community/media/visual/2021/08/05/vaksin-ct-corp_169.jpeg?w=700&q=90',
      title:
        'Vaksinasi COVID-19 CT Corp Sudah Layani Ibu Hamil! Cek Lokasinya di Sini',
      date: 'Kamis, 05 Agu 2021 11:52 WIB',
    },
    {
      image:
        'https://akcdn.detik.net.id/community/media/visual/2021/07/29/vaksinasi-covid-19-di-transmart-cikokol-tangerang-1_169.jpeg?w=700&q=90',
      title:
        'Vaksin COVID-19 di Transmart Cikokol Enak, Banyak Kursi untuk Antre',
      date: 'Kamis, 29 Jul 2021 16:38 WIB',
    },
    {
      image:
        'https://akcdn.detik.net.id/community/media/visual/2021/07/05/ilustrasi-virus-corona-covid-19_169.jpeg?w=700&q=90',
      title: 'Kabar Baik, Pasien Sembuh COVID-19 di Kota Bandung Tembus 2.069',
      date: 'Selasa, 03 Agu 2021 10:36 WIB',
    },
  ]);
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderCardSection
          style={{
            marginTop: '-14rem',
            marginLeft: '0rem',
          }}
        >
          <HeadLineNews>
            <ImgHeadLine
              className="card-img-top"
              src={HeadLines}
              alt="headline-news"
            />
          </HeadLineNews>

          <HeadLineNews>
            <NewsFeed newsFeeds={newsFeeds} />
          </HeadLineNews>
        </HeaderCardSection>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
