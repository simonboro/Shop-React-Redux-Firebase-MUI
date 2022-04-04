import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledGalleryWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 1280px;
  padding-top: 20px;
  padding-left: 0px;

  /* .image-gallery {
    width: 40%;
    height: auto;
  } */

  .image-gallery-slide img {
    width: 100%;
    /* height: auto; */
    /* max-height: 80vh; */
    height: 620px;
    object-fit: cover;
    overflow: hidden;
    object-position: center center;
  }

  /* .fullscreen .image-gallery-slide img {
    max-height: 100vh;
  } */

  @media (max-width: 1000px) {
    padding-top: 10px;
  }
`;
