import React from "react";
import styled from "styled-components";
import { InfoDataFive } from "../data/InfoDataFive";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  h1 {
    margin-left: 60px;
    font-size: 35px;
  }
`;

const Container = styled.div`
  padding: 3rem cal((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  position: absolute;

  img {
    display: grid;
    flex-direction: column;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    overflow: hidden;
    height: 120px;
    cursor: pointer;
    margin-left: 2px;
  }

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
  margin-left: 20px;
  gap: 2rem;

  order: ${({ reverse }) => (reverse ? "2" : "1")};
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  @media screen and (max-width: 768px) {
    // order: ${({ reverse }) => (reverse ? "2" : "1")};
    grid-template-columns: 1fr;
  }
`;
const InfoSectionFive = ({ heading, image }) => {
  return (
    <Section>
      <div>
        <h1>{heading}</h1>
      </div>
      <Container>
        <ColumnLeft>
          <div>
            {InfoDataFive.image.map((image, index) => (
              <img key={index} to="/" src={image} alt="home" />
            ))}
          </div>
        </ColumnLeft>
        <ColumnRight
          style={{
            display: "flex",
            flexDirection: "row",
            lineHeight: "60px",
            marginRight: "160px",
            marginBottom: "10rem",
            minWidth: "160px",
            fontWeight: "600",
            justifyContent: "center",
            alignItem: "flex-start",
            fontSize: "20px",
            // fontSize: "20px",
            // boxShadow: "0 10px 30px 0 rgb(1 1 64 / 8%)",
            // width: "100%",
          }}
        >
          <span>
            {/* {" "}
            <BsFillArrowRightCircleFill /> */}
            {InfoDataFive.title.map((title, index) => (
              <div
                style={{
                  // fontSize: "20px",
                  // marginRight: "10px",
                  justifyContent: "center",
                }}
                key={index}
              >
                <BsFillArrowRightCircleFill
                  style={{
                    fontSize: "34px",
                    marginRight: "2px",
                    justifyContent: "center",
                  }}
                />
                {title}
              </div>
            ))}
          </span>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSectionFive;
