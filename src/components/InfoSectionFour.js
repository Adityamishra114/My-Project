import React from "react";
import Container from "@mui/material/Container";
import { InfoDataFour } from "../data/InfoDataFour";
import styled from "styled-components";
// import styled from 'styled-components';
import GlobalStyle from "../globalStyles";
import { useMediaQuery } from "@mui/material";

const Section = styled.div`
  height: 100%;
  width: 100%;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    // animation5s ease-out 4s 1 slideInFromRight;
    // animation: 5s ease-out 4s 1 slideInFromLeft;
    gap: 2rem;
    // margin-top: "30rem";
  }
`;

// const Section = styled.section``;
const InfoSectionFour = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const { image, number, heading, paragraph } = InfoDataFour[0];

  return (
    <>
      <Section
        style={{
          marginTop: "30rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
        }}
        // style={{
        //   height: "100%",
        //   width: "100%",
        //   display: "row",
        //   rowGap:'2px',
        //   alignItems: "center",
        //   justifyContent: "start",
        //   order: '${({ reverse }) => (reverse ? "1" : "2")}',
        //   '@keyframes slideInFromLeft': {
        //     "0%": {
        //       transform: 'translateX(-100%)'
        //     },
        //     "100%": {
        //       transform: 'translateX(0)'
        //     },
        //   },
        //   '@keyframes slideInFromRight': {
        //     "0%": {
        //       transform: 'translateX(100%)'
        //     },
        //     "100%": {
        //       transform: 'translate-X(0)'
        //     },
        //   },
        //   '@media screen and (max-width: 768px)': {
        //     animation: '5s ease-out 4s 1 slideInFromRight',
        //     // animation: '5s ease-out 4s 1 slideInFromLeft',
        //     gap:'2rem',
        //   }

        // }}
      >
        {/* <Section> */}
        {/* <Section> */}
        {InfoDataFour.map((item, index) => (
          <Container
            maxWidth="lg"
            key={index}
            style={{
              width: "33%",
              display: "flex",
              flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-around",
              order: '${({ reverse }) => (reverse ? "1" : "2")}',
            }}
          >
            {/* {`(min-width:768px) matches:${matches}`} */}
            <img
              src={item.image}
              alt="info1"
              style={{
                height: "398px",
                width: "306px",
                animation: "5s ease-out 4s 1 slideInFromLeft",
              }}
            />
            <span
              style={{
                borderRadius: "50%",
                backgroundColor: "#262fd4",
                boxShadow: "0 10px 30px 0 rgb(1 1 64 / 8%)",
                // width: "80px",
                // height: "80px",
                width: "33%",
                textAlign: "center",
                margin: "0 auto",
                fontSize: "30px",
                color: "#fff",
                fontWeight: "500",
                lineHeight: "80px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {item.number}
            </span>
            <div
              style={{
                display: "grid",
                flexDirection: "columns",
                margin: "0 auto",
                justifyContent: "space-between",
                // alignItems: "center",
                width: "33%",
                animation: "5s ease-out 4s 1 slideInFromRight",
              }}
            >
              <h4 style={{ fontSize: "25px", fontWeight: "200px" }}>
                {item.heading}
              </h4>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "200px",
                  display: "grid",
                  flexDirection: "column",
                }}
              >
                {item.paragraph}
              </p>
            </div>
          </Container>
        ))}
        ;{/* </Section> */}
      </Section>
    </>
  );
};

export default InfoSectionFour;
