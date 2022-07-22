import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { FiArrowRight } from "react-icons/fi";
import InfoCard from "./InfoCard";
import CountUp from 'react-countup';

// import { CardActionArea } from "@mui/material";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0rem;
`;
const Container = styled.div`
  padding: 3rem cal((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 3rem;
  margin-bottom: 2px;

  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    font-family: "Varela Round", sans-serif;
  }
  p {
    margin-bottom: 2rem;
    font-size: 23px;
  }
`;
// const Wrapper = styled.div``;
const Arrow = styled(FiArrowRight)``;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  // justify-content: center;
  // align-items: center;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  @media screen and (max-width: 768px) {
    // order: ${({ reverse }) => (reverse ? "2" : "1")};
    justify-content: space-around;
    display: column;
    flex-direction: column;
    // margin: 120px 120px;
    // padding:60px 20px;
  }

  // img {
  //   width: 100%;
  //   height: 80%;
  //   // object-fit: cover;
  //   object-fit: fill;
  //   // margin-Bottom:7rem;
  //   // margin-top: 3rem;

  //   @media screen and (max-width: 768px) {
  //     width: 90%;
  //     height: 90%;
  //   }
  // }
`;

const InfoSection = ({ heading, paragraph, buttonLabel, image }) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
          <Button className="btn-hover" to="/">
            {buttonLabel} <Arrow />
          </Button>
          <div className="container">
            <span className="prefix">$</span>
            <span className="counter-number"><CountUp duration={2} separator="." start={0} end={4}/></span>
            <span className="suffix">Bn+</span>
          </div>
          <div className="title">Value Unlocked for Clients</div>
          <div className="wrapper">
            <span className="prefix"></span>
            <span className="counter-number"><CountUp duration={2} separator="." start={0} end={10}/></span>
            <span className="suffix">+</span>
          </div>
          <div className="title">Clients</div>
          <div className="wrapper">
            <span className="prefix"></span>
            <span className="counter-number"><CountUp duration={2} separator="." start={30} end={40}/></span>
            <span className="suffix">+</span>
          </div>
          <div className="title">Employees</div>
        </ColumnLeft>
        <ColumnRight>
          <InfoCard />
          {/* <img src={image} alt="home"/> */}
          {/* <CardName/> */}
          {/* <CardName /> */}
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
