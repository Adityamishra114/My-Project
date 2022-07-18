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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  // margin-Bottom: 25rem;

  order: ${({ reverse }) => (reverse ? "2" : "1")};

  p {
    margin-left: 10px;
    margin-bottom: 12rem;
    text-align: left;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 27px;
    line-height: 1.5;
    display: flex;
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      order: ${({ reverse }) => (reverse ? "2" : "1")};
    }
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  // justify-content: center;
  // align-items: center;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    height: 100%;
    width: 100%;
    margin-right: 1rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    order: ${({ reverse }) => (reverse ? "2" : "1")};
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
  display"flex;

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
