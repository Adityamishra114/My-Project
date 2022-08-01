import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0rem;
  margin-top: 25rem;
`;
const Container = styled.div`
  padding: 3rem cal((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  position: absolute;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 1rem 2rem;

  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h2 {
    margin-bottom: 18rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    font-faimly: "Montserrat", sans-sarif;
  }
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    grid-template-columns: 1fr;
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
      width: 90%;
      height: 90%;
    }
   
`;

const InfoSectionTW = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h2>
            Trusted by <br />
            great brands
          </h2>
        </ColumnLeft>
        <ColumnRight>
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <img src={require("../images/synLabs.jpg")} alt="cover" />
          </div>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSectionTW;
