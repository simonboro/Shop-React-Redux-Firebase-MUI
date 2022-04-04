import React from "react";
import ImageGallery from "react-image-gallery";
import { StyledGalleryWrapper, StyledHome } from "./StyledHome";
import "react-image-gallery/styles/css/image-gallery.css";

import mainPhoto1 from "../../assets/images/mainPhoto1.jpg";
import mainPhoto2 from "../../assets/images/mainPhoto2.jpg";
import mainPhoto3 from "../../assets/images/mainPhoto3.jpg";
import NewProductsCorousele from "../../components/molecules/NewProductsCorousel";

const Home = () => {
  return (
    <div>
      <StyledHome>
        <StyledGalleryWrapper>
          <MyGallery />
        </StyledGalleryWrapper>
        <NewProductsCorousele />
      </StyledHome>
    </div>
  );
};

export default Home;

const MyGallery = () => {
  const images = [
    {
      original: mainPhoto2,
    },
    {
      original: mainPhoto1,
    },
    {
      original: mainPhoto3,
    },
  ];

  return (
    <ImageGallery
      showPlayButton={false}
      items={images}
      showThumbnails={false}
      showFullscreenButton={false}
      showBullets={true}
      // autoPlay={true}
    />
  );
};

// https://www.npmjs.com/package/react-image-gallery

// https://www.npmjs.com/package/react-multi-carousel
