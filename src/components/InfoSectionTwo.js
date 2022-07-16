import React from "react";
import styled from "styled-components";


const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 0rem;
  justify-content: space-between;
  display: flex;
  position: absolute;
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    grid-template-columns: 1fr;
  }



  p {
    margin-left: 5%;
    margin-top: 10%;
    text-align: left;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 27px;
    line-height: 1.5;
    display:inline;
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      order: ${({ reverse }) => (reverse ? "2" : "1")};
    }
  }

  img {
    height: 350px;
    width: 425px;
    margin-right: 30px;
   
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
  margin: 10px 35px;
  line-height: 1.5;
  cursor: pointer;


  &:hover{
    background-color:transparent;
    color:black;
    font-family: "Montserrat", sans-serif;
  }
`;

const InfoSectionTwo = ({ paragraph, buttonLabel, image }) => {
  return (
    <Section style={{position:'relative'}}>
      <div>
      <p>{paragraph}</p>
      <Btn to="/">{buttonLabel}  </Btn>
      </div>
      <img src={image} alt="home" />
    </Section>
  );
};

export default InfoSectionTwo;
