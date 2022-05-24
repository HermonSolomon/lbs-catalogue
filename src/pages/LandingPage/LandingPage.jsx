import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import ContentContainer from "../../layouts/ContentContainer/ContentContainer";
import CTAButton from "../../Components/Buttons/CTAButton";
import heroBg from "../../assets/global/Hero_illustration.svg";
import heroPath from "../../assets/global/Hero_illustration2.png";
import ImgOne from "../../assets/carousel/img-1.png";
import ImgTwo from "../../assets/carousel/img-2.png";
import ImgThree from "../../assets/carousel/img-3.png";
import ImgFour from "../../assets/carousel/img-1.png";
import ImgFive from "../../assets/carousel/img-2.png";
import ImgSix from "../../assets/carousel/img-3.png";
import bannerBlob from "../../assets/global/avado_banner-blob.png";

import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

let carouselImgs = [ImgOne, ImgTwo, ImgThree, ImgFour, ImgFive, ImgSix];

// for (let i = 1; i <= 6; i++) {
//   carouselImgs = carouselImgs.push(i);
//   console.log(carouselImgs);
// }

const LandingPage = () => {
  const [items, setItems] = useState(carouselImgs);
  return (
    <>
      <header id="page-three-top" className="">
        <NavBar />
      </header>

      <div className="hero">
        <div className="hero__container">
          <ContentContainer styleClass="content-container__container--2col">
            <h1 className="heading__primary">
              Beutiful templates designed to fit any business
              <CTAButton
                modifier="primary"
                text="View all Assets"
                htmlTag="button"
              />
            </h1>
          </ContentContainer>
          <div className="blob">
            <img src={heroPath} alt="" />
          </div>
        </div>
      </div>

      <main>
        {/* Carousel */}
        <ContentContainer
          modifier="bg"
          styleClass="content-container__container--1col carousel-section"
        >
          <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints}>
              {items.map((item) => (
                <Item key={item} src={item} />
              ))}
            </Carousel>
          </div>
        </ContentContainer>

        {/* Section */}
        <ContentContainer>
          <div className="text-container text-container--1col text-container--white-bg">
            <h3 className="heading--tertiary">
              Underneath all of this are our values...
            </h3>
            <p>
              Our Values have proven to be core to what drives our Purpose, our
              decisions and our interactions with others, thus creating a ‘hard
              is soft, soft is hard’, human working environment.
            </p>
            <h3 className="heading--tertiary">Our values Manifesto</h3>
            <ul className="paragraph paragraph__list">
              <li>
                We truly respect that each person will have their own personal
                way of interpreting what our values mean to them and apply them
                accordingly to their thought processes, decisions, actions
                and/or behaviours.
              </li>
              <li>
                We don’t believe in culture fit; we believe in culture
                contribution - everyone’s individuality should be celebrated,
                and not condensed to fill a ‘one-size-fits-all’ mould.
              </li>
              <li>
                We don’t call people “staff” or “employees”; we call people,
                “people” or “person”. It’s just a bit more human, isn’t it.
              </li>
            </ul>
          </div>
        </ContentContainer>

        {/* Section */}
        <ContentContainer
          modifier="bg"
          styleClass="content-container__container--2col"
        >
          <div className="blob-second">
            <img src={bannerBlob} alt="" />
            <div className="text-container text-container--1col">
              <h3 className="heading--tertiary">
                Underneath all of this are our values...
              </h3>
              <p>
                Our Values have proven to be core to what drives our Purpose,
                our decisions and our interactions with others, thus creating a
                ‘hard is soft, soft is hard’, human working environment.
              </p>
            </div>
          </div>

          <div className="text-container text-container--1col">
            <h3 className="heading--tertiary">
              Get to know each team’s project Development Process
            </h3>
            <div className="internal-team-boxes">
              <div className="boxes box1"></div>
              <div className="boxes box2"></div>
              <div className="boxes box3"></div>
            </div>
          </div>
        </ContentContainer>

        {/* Carousel */}
        <ContentContainer styleClass="content-container__container--1col carousel-section">
          <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints}>
              {items.map((item) => (
                <Item key={item} src={item} />
              ))}
            </Carousel>
          </div>
        </ContentContainer>
      </main>
    </>
  );
};

const Item = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;

export default LandingPage;
