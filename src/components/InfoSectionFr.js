import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0rem;
  //   background-color: #ed0020;
  margin-top: 460px;
  //   justify-content: space-between;
  // display: flex;
  // position: relative;

  h1 {
    position: relative;
    color: #fff;
    // top: 50%;
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    grid-template-columns: 1fr;
  }
`;
const Btn = styled.button`
  background-color: white;
  color: #ed0020;
  position: relative;
  font-size: 20px;
  padding: 10px 45px;
  border-radius: 5px;
  margin: 10px 5px;
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: black;
    font-family: "Montserrat", sans-serif;
  }
`;

const InfoSectionFr = () => {
  return (
    <Section>
      <div
        style={{
          height: "60%",
          width: "100%",
          backgroundColor: "#ed0020",
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          justifyContent: "space-around",
          display: "flex",
          alignItems: "center",
          marginTop: "180px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Start growing with SynergyLabs today!</h1>
        </div>
        <Btn>Contact us</Btn>
      </div>
    </Section>
  );
};

export default InfoSectionFr;
