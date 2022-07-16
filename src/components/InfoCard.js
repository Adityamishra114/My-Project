import  Grid  from "@mui/material/Grid";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const InfoCard = () => {
  return (<>
      <Grid container spacing={2} >
        <Grid item xs={2} md={5}>
          <Card sx={{ maxWidth: 345 }}   >
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"
                width="30"
                border='2px solid black'
                image={process.env.PUBLIC_URL + "/computervision.jpg"}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Computer-Vision
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={2} md={5}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"
                width="30"
                image={process.env.PUBLIC_URL + "/ReinforcementLearning.jpg"}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Reinforcement Learning
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={8} >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"
                width="30"
                image={process.env.PUBLIC_URL + "/ML-DL.jpg"}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Machine Learning -Deep Learning
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={2} md={5}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"
                width="30"
                image={process.env.PUBLIC_URL + "/Nlp.jpg"}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 NLP
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={2} md={5}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"
                width="30"
                image={process.env.PUBLIC_URL + "/PredictiveAnalytics.jpg"}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Predictive Analytics
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default InfoCard;
