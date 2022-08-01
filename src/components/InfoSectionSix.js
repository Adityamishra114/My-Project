import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { InfoDataSix } from "../data/InfoDataSix";
import Grid from "@mui/material/Grid";

const Section = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 43rem;

  h1 {
    margin-left: 120px;
    justify-content: center;
    margin-right: 120px;
    align-items: center;
    display: flex;
    font-size: clamp(1rem, 30px, 3rem);
  }
  p {
    max-width: 670px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const InfoSectionSix = () => {
  const { heading, paragraph } = InfoDataSix[0];
  return (
    <>
      <Section>
        <h1>{heading}</h1>
        <div style={{ fontSize: "26px" }}>
          <p>{paragraph}</p>
        </div>
        {/* <div> */}

        <div
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            margin: "10px 10px",
            flexDirection: "row",
          }}
        >
          {InfoDataSix.map((item, index) => {
            if (index === 0) return;
            return (
              <Card
                key={index}
                sx={{
                  minWidth: "35%",
                  marginTop: "20px",
                  gap: "3rem",
                  display: "flex",
                  flexDirection: "column",
                  height: "480px",
                  marginLeft: "40px",
                }}
              >
                <CardMedia
                  style={{
                    width: "15%",
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "200px",
                    marginRight: "200px",
                    marginTop: "10px",
                    wrap: "nowrap",
                  }}
                  key={index}
                  component="img"
                  alt="synlabs"
                  height="60"
                  src={item.image}
                />

                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {item.title}
                  </Typography>
                  <div>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ marginTop: "40px" }}
                    >
                      {item.heading1}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ marginTop: "5px" }}
                    >
                      {item.paraghaph1}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* </div> */}
      </Section>
    </>
  );
};

export default InfoSectionSix;
