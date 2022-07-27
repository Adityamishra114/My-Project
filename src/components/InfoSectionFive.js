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
  gap: 18rem;

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
  // padding: 1rem 2rem;
  // display: flex;
  // justify-content: center;
  // align-items: flex-start;
  width: 100%;
  margin: 2px 2px;
  align-content: center;
  // justify-content: space-around;
  //   
  //   display: inline-flex;
  //   flex-wrap: wrap;
  //   flex-direction: row;
  //   align-content: center;
  //   align-items: center;
  //   gap: 3rem;
  
}
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
          }}
        >
          <span>
            {/* {" "}
            <BsFillArrowRightCircleFill /> */}
            {InfoDataFive.title.map((title, index) => (
              <div
                style={{
                  justifyContent: "start",
                  margin: "2px 2px",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "3rem",
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
