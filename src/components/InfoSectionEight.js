import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";
import { InfoDataEight } from "../data/InfoDataEight";
import { Button } from "./Button";
import { width } from "@mui/system";
// import Intm from "../images/Intm.png";
// import Frenc from "../images/Frenc.png";
// import logo from "../images/logo.png";
import { AiOutlineCheck } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
// import { icons } from "react-icons/lib";

const Section = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 180px;

  h3 {
    display: flex;
    justify-content: "start";
    margin-left: 20px;
    font-size: 30px;
  }
`;
// const Btn = styled.button`
//   background-color: blue;
//   color: white;
//   font-size: 20px;
//   padding: 10px 45px;
//   border-radius: 5px;
//   margin: 10px 5px;
//   line-height: 1.5;
//   cursor: pointer;
//   animation: 5s ease-out 4s 1 slideInFromLeft;

//   &:hover {
//     background-color: transparent;
//     color: black;
//     font-family: "Montserrat", sans-serif;
//   }
// `;

const InfoSectionEight = () => {
  const { heading, image, title, buttonLabel, icons } = InfoDataEight[0];
  return (
    <Section>
      <h3>Competitive Advantage</h3>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        {InfoDataEight.map((item, index) => (
          <Card
            key={index}
            sx={{
              // width: "30%",
              marginTop: "20px",
              // gap: "1rem",
              flex: "30%",
              // display: "flex",
              // flexDirection: "column",
              height: "550px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <Card
              key={index}
              sx={{
                marginTop: "30px",
                height: "auto",
                width: "150px",
                marginLeft: "30%",
              }}
            >
              <CardMedia
                key={index}
                component="img"
                alt="Internal"
                height="auto"
                image={item.image}
                maxWidth="100%"
                borderRadius="0"
                border="none"
                boxShadow="none"
              />
            </Card>
            <CardContent>
              <Typography key={index} gutterBottom variant="h5" component="div">
                <h5>{item.heading}</h5>
              </Typography>
            </CardContent>
            <CardContent>
              <div style={{ display: "flex" }}>
                <Typography
                  key={index}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      lineHeight: "2.5rem",
                      marginTop: "20px",
                    }}
                  >
                    {item.title.map((title) => (
                      <h5
                        style={{
                          display: "flex",
                          flexDirection: "start",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <div key={index}>
                          <i>{icons}</i>
                        </div>
                        {/* {" "}
                        <AiOutlineCheck /> */}
                        {title}
                      </h5>
                    ))}
                  </div>
                </Typography>
              </div>
            </CardContent>
            {/* <div key={index}>
              <Button>{buttonLabel}</Button>
            </div> */}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default InfoSectionEight;
