import React, { useState } from "react";
import Icon1 from "../../../assets/img/undraw_Calculator_0evy.svg";
import Icon2 from "../../../assets/img/undraw_All_the_data_re_hh4w.svg";
import Icon3 from "../../../assets/img/undraw_In_sync_re_jlqd.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
} from "./ServicesElements";

const Services = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>
            <b>Bill Calculation</b>
          </ServicesH2>
          <ServicesP>
            We will calculate your monthly electricity bill using both Normal
            Billing method and Time of Use(ToU) method
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>
            <b>Bill Comparission</b>
          </ServicesH2>
          <ServicesP>
            Compare your monthly electricity bill in both methods to select the
            best method for you
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>
            <b>Suggestions</b>
          </ServicesH2>
          <ServicesP>
            We will provide you suggestions to reduce your monthly electricity
            bill when using TOU method
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      <HeroBtnWrapper>
        <Button to="/sign-in" onMouseEnter={onHover} onMouseLeave={onHover}>
          GET STARTED {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
    </ServicesContainer>
  );
};

export default Services;
