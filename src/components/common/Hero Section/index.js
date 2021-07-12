import React, { useState } from "react";
import {
  HeroContainer,
  Button,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../../assets/Video/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>ELECTRO</HeroH1>
          <HeroP>
            Sustainable Electricity Model for Domestic Household users to select
            between normal billing method and Time Of Use (TOU) method
          </HeroP>
          <HeroBtnWrapper>
            <Button to="/sign-in" onMouseEnter={onHover} onMouseLeave={onHover}>
              GET STARTED {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
