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
import MotionIcon from "../../assets/global/Mod_Icon.svg";
import iDevsIcons from "../../assets/global/iDev_Icon.svg";
import GraphicsIcon from "../../assets/global/GD_Icon.svg";
import cornerDecor from "../../assets/global/corner-decor.svg";

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

      {/* <div className="hero">
        <div className="hero__container">
          <ContentContainer className="content-container__container--2col">
            <aside>
              <h1 className="heading__primary">
                Beutiful templates designed to fit any business
              </h1>
              <CTAButton
                modifier="primary"
                text="View all Assets"
                htmlTag="button"
              />
            </aside>
            <aside>
              <div className="blob">
                <img src={heroPath} alt="" />
              </div>
            </aside>
          </ContentContainer>
        </div>
      </div> */}

      <section className="landing">
        <div className="landing-text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <CTAButton modifier="primary" text="All Assets" htmlTag="button" />
        </div>
        <div className="landing-image">
          <img src={heroPath} />
        </div>
      </section>

      <main>
        {/* Carousel */}

        <div className="content-container__container carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <Item key={item} src={item} />
            ))}
          </Carousel>
        </div>

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
          styleclassName="content-container__container--2col"
        >
          <div className="blob-second">
            <img src={bannerBlob} alt="" />
          </div>
          <div className="content-container__container content-container__container--2col">
            <div className="text-container text-container--1col text-float-left">
              <h3 className="heading--tertiary">
                Underneath all of this are our values...
              </h3>
              <p>
                Our Values have proven to be core to what drives our Purpose,
                our decisions and our interactions with others, thus creating a
                ‘hard is soft, soft is hard’, human working environment.
              </p>
            </div>
            <div className="text-container text-container--1col">
              <h3 className="heading--tertiary">
                Get to know each team’s project Development Process
              </h3>
              <div className="internal-team-boxes">
                <div className="boxes box1">
                  <div className="card-img">
                    <img src={MotionIcon} alt="" />
                  </div>
                  <div className="card-info">Lorem ipsum dolor sit.</div>
                </div>
                <div className="boxes box2">
                  <div className="card-img">
                    <img src={iDevsIcons} alt="" />
                  </div>
                  <div className="card-info">Lorem ipsum dolor sit.</div>
                </div>
                <div className="boxes box3">
                  <div className="card-img">
                    <img src={GraphicsIcon} alt="" />
                  </div>
                  <div className="card-info">Lorem ipsum dolor sit.</div>
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>

        {/* Carousel */}
        <ContentContainer modifier="gradient">
          <div className="text-container text-container--1col text-container--white-bg">
            <h2 className="heading--secondary">And the Values themselves...</h2>
            <p style={{ marginBottom: "13rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              architecto dolorem! Fugit quod excepturi, error, reprehenderit
              aliquam blanditiis illo dolores sit fuga, quasi tenetur molestiae
              accusantium nisi quia aliquid unde facere doloremque.
            </p>

            <div className="corner-image">
              <img src={cornerDecor} alt="" />
            </div>
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
