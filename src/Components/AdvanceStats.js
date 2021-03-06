import React from "react";
import {
  Container,
  Card,
  Image,
  ImageCont,
  Title,
  Text,
  CardCont,
  CenterLine,
  TitleCont,
  MainTitle,
  SubTitle,
} from "./AdvanceStats.styles";
import brandRec from "../assets/images/icon-brand-recognition.svg";
import detailedRec from "../assets/images/icon-detailed-records.svg";
import fullCust from "../assets/images/icon-fully-customizable.svg";

const Cards = props => {
  return (
    <Card cardNum={props.cardNum}>
      <ImageCont>
        <Image src={props.image} />
      </ImageCont>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </Card>
  );
};
function AdvanceStats() {
  return (
    <Container id="analytics">
      <TitleCont>
        <MainTitle>Advanced Statistics</MainTitle>
        <SubTitle>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </SubTitle>
      </TitleCont>
      <CardCont>
        <Cards
          title="Brand Recognition"
          image={brandRec}
          text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          cardNum={1}
        />
        <Cards
          title="Detailed Records"
          image={detailedRec}
          text="Gain insights into who is clicking your
          links. Knowing when and where
          people engage with your content
          helps inform better decisions."
          cardNum={2}
        />
        <Cards
          title="Fully Customizable"
          image={fullCust}
          text="Improve brand awareness and
          content discoverability through
          customizable links, supercharging
          audience engagement."
          cardNum={3}
        />
        <CenterLine />
      </CardCont>
    </Container>
  );
}

export default AdvanceStats;
