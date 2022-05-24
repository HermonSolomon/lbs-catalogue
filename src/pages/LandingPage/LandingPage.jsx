import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import ContentContainer from "../../layouts/ContentContainer/ContentContainer";
import CTAButton from "../../Components/Buttons/CTAButton";

const LandingPage = () => {
  return (
    <>
      <header id="page-three-top" className="">
        <NavBar />
        <div className="hero">
          <div className="hero__container">
            <ContentContainer styleClass="content-container__container--2col">
              <p className="paragraph">
                Great culture. The people really make it a great place to work.
                One of the best decisions I have made coming to work at Avado.
                <CTAButton
                  modifier="primary"
                  text="View all Assets"
                  htmlTag="button"
                />
              </p>
              <div className="blob"></div>
            </ContentContainer>
          </div>
        </div>
      </header>

      <main>
        <ContentContainer
          modifier="image"
          styleClass="content-container__container--1col carousel-section"
        >
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
      </main>
    </>
  );
};

export default LandingPage;
