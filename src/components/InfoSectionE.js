import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
const Container = styled.div`
  padding: 3rem cal((100vw - 1300px) / 2);
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 450px;
  position: absolute;
  justify-content: space-between;
  //   align-items: center;
  margin: 0 auto;
  // gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    grid-template-columns: 1fr;
  }

  img {
    width: 500px;
    height: 450px;
    object-fit: cover;
    position: relative;
   

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? "1" : "2")};
        grid-template-columns: 1fr;
        gap: 2px;
      }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    grid-template-columns: 1fr;
  }

  img {
    width: 500px;
    height: 450px;
    object-fit: cover;
    position: relative;
   

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? "1" : "2")};
        grid-template-columns: 1fr;
        gap:2px;
      }
`;

const InfoSectionE = () => {
  return (
    <Section>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-around",
            // alignItems: "center",
          }}
        >
          <ColumnLeft>
            <div style={{ marginLeft: "40px", marginRight: "40px" }}>
              <img src={require("../images/synLabs.jpg")} alt="cover" />
            </div>
          </ColumnLeft>
          <ColumnRight>
            <div style={{ marginLeft: "20px", marginRight: "20px" }}>
              <img src={require("../images/synLabs.jpg")} alt="cover" />
            </div>
          </ColumnRight>
        </div>
      </Container>
    </Section>
  );
};

export default InfoSectionE;
