import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Heading from "./Heading";
function getImgPath(imgSrc) {
  return require("../../img/" + imgSrc);
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 30px",
  },
  width: {
    maxWidth: 600,
    margin: "0 30px",
  },
  media: {
    height: 200,
    maxHeight: "190px",
  },
  text: {
    textAlign: "justify",
    fontWeight: "bold",
    fontSize: "13px",
    height: 210,
  },

}));
export default function ViewList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root} id="impression">
      <Heading data={props.data} />

      <Grid container spacing={3}>
        {props.data.paragraphs.map((para, index) => {
          return (
            <Grid item sm={12} md = {6} lg= {4} container direction="row" justify="center" alignItems="center" key={index}>
              <Card className={classes.width}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={getImgPath(para.image.src)}
                    title={para.image.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {para.person}
                    </Typography>
                    <Typography
                      className={classes.text}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      children
                    >
                      {para.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
