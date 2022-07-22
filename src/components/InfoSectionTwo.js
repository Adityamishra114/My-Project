import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0rem;
  // justify-content: space-between;
  // display: flex;
  // position: relative;
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    grid-template-columns: 1fr;
  }
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
  display: column;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  margin-top: 50%;
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  

  order: ${({ reverse }) => (reverse ? "2" : "1")};

  p {
    margin-left: 10px;
    margin-bottom: 2rem;
    text-align: left;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 27px;
    line-height: 1.5;
    display: flex;
    animation: 5s ease-out 4s 1 slideInFromLeft;
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      order: ${({ reverse }) => (reverse ? "2" : "1")};
      animation: 5s ease-out 4s 1 slideInFromLeft;
    }
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  // justify-content: center;
  // align-items: center;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translate-X(0);
    }
  }

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    animation: 5s ease-out 4s 1 slideInFromRight;
  }

  img {
    height: 100%;
    width: 100%;
    margin-left: 1rem;
    animation: 5s ease-out 4s 1 slideInFromRight;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    animation: 5s ease-out 4s 1 slideInFromRight;
  }
`;
const Btn = styled.button`
  background-color: blue;
  color: white;
  font-size: 20px;
  padding: 10px 45px;
  border-radius: 5px;
  margin: 10px 5px;
  line-height: 1.5;
  cursor: pointer;
  animation: 5s ease-out 4s 1 slideInFromLeft;

  &:hover {
    background-color: transparent;
    color: black;
    font-family: "Montserrat", sans-serif;
  }
`;

const InfoSectionTwo = ({ paragraph, buttonLabel, image }) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <p>{paragraph}</p>
          <Btn to="/">{buttonLabel} </Btn>
        </ColumnLeft>
        <ColumnRight>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSectionTwo;
