import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 2rem;
  margin-top: 150px;

  h2 {
    color: #445087;
    // top: 50%;
    font-size: 30px;
    margin-left: 30px;
  }
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    grid-template-columns: 1fr;
  }
`;
const Container = styled.div`
  margin-top: 10px;
  margin-left: 40px;
  margin-right: 40px;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    grid-template-columns: 1fr;
  }
`;

const InfoSectionTen = () => {
  return (
    <Section>
      <h2>Teams that blend</h2>
      <Container>
        <div
          style={{
            marginRight: "20px",
            marginLeft: "20px",
            overflow: "hidden",
            objectFit: "fill",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src={require("../images/Meeting.jpg")}
            alt="cover"
            height={500}
            width={950}
          />
        </div>
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8rem",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <img
          src={require("../images/AWS.jpg")}
          alt="cover"
          height={100}
          width={100}
        />
        <img
          src={require("../images/GoogleCloud.jpg")}
          alt="cover"
          height={100}
          width={100}
        />
        <img
          src={require("../images/IBM.png")}
          alt="cover"
          height={100}
          width={100}
        />
        <img
          src={require("../images/MicrosoftAzure.png")}
          alt="cover"
          height={120}
          width={120}
        />
      </div>
    </Section>
  );
};

export default InfoSectionTen;
