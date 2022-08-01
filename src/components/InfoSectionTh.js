import React from "react";
import styled from "styled-components";
import { CgImport } from "react-icons/cg";
import { BsZoomIn } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BiMedal } from "react-icons/bi";
import { InfoDataTh } from "../data/InfoDataTh";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0rem;
  margin-top: 30rem;
`;
const Container = styled.div`
  padding: 3rem cal((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  position: absolute;
  gap: 3.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  order: ${({ reverse }) => (reverse ? "2" : "1")};
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

  h2 {
    // margin-bottom: 18rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    font-faimly: "Montserrat", sans-sarif;
  }
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    grid-template-columns: 1fr;
  }
`;

const InfoSectionTh = () => {
  const { heading, icons } = InfoDataTh[0];
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <div>
            <img src={require("../images/Intm.png")} alt="cover" />
          </div>
        </ColumnLeft>
        <ColumnRight>
          <div>
            <h2>Four Simple Steps to Get Started</h2>
            {InfoDataTh.map((item, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginTop: "45px",
                    textAlign: "center",
                  }}
                >
                  <div
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   justifyContent: "flex-start",
                  //   alignItems: "flex-start",
                  // }}
                  >
                    <span
                      key={index}
                      style={{
                        width: "50px",
                        height: "50px",
                        textAlign: "center",
                        margin: "0 auto",
                        fontSize: "30px",
                        fontWeight: "200",
                        lineHeight: "70px",
                        display: "flex",
                        backgroundColor: "white",
                        //   color: "#fff",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        boxShadow: "0 10px 30px 0 rgb(1 1 64 / 8%)",
                      }}
                    >
                      {item.icons}
                    </span>
                  </div>
                  <div
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  // }}
                  >
                    <h6
                      key={index}
                      style={{
                        fontSize: "30px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        textAlign: "center",
                        display: "block",
                      }}
                    >
                      {item.heading}
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSectionTh;
