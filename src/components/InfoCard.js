import  Grid  from "@mui/material/Grid";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { maxWidth } from "@mui/system";




const InfoCard = () => {
  const matches = useMediaQuery(
    maxWidth = "md",
  )
  return (<>
      <Grid container spacing={2} matches= {matches} sx={{flexDirection:'columns', justifyContent:'space-around', borderRadius:"50px",  position: "relative",
  animation: "myfirst 5s infinite",
  animationDirection: "alternate",
"@keyframes myfirst":{
 "0%" :  {left: "0px", top: "0px"},
  "25%" : {left: "20px", top: "0px"},
  "50%"  :{left: "20px", top: "20px"},
  "75%" : {left: "0px", top: "20px"},
  "100%": {left: "0px", top: "0px"},
}}} >
        <Grid item xs={2} md={5}>
          <Card sx={{ maxWidth: 345, height:"200px", width:"230px", backgroundColor: '#757de8' }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"
                width="60"
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
          <Card sx={{ maxWidth: 345, height:"200px", width:"230px", backgroundColor:'#757de8' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"
                width="60"
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
          <Card sx={{ maxWidth: 345, height:"200px", width:"230px", backgroundColor:'#757de8', marginLeft:'60px'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"
                width="60"
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
          <Card sx={{ maxWidth: 345, height:"200px", width:"230px", backgroundColor:'#757de8' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"
                width="60"
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
          <Card sx={{ maxWidth: 345, height:"200px", width:"230px", backgroundColor:'#757de8' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"
                width="60"
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
