import React, { Component } from "react";
import {Carousel} from '3d-react-carousal';
import CustomCard from "../parts/CustomCard.js";
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles ({
  root: {
    
  }
});

const MyCarousel = props => {
  const classes = useStyles();
  const slides = [
    <CustomCard {...props.card[0]} />,
    <CustomCard {...props.card[1]} />,
    <CustomCard {...props.card[2]} />,

  ]
  return (
    <div>
      <div style={{padding: "2.5vw 0"}}/>
      <Typography variant='h3' style={{textAlign: "center"}}>{props.top}</Typography>
      <Carousel slides={slides} autoplay={true} interval={100000000}/>
      <div style={{padding: "5vw 0"}}/>
    </div>
  )
}
export default MyCarousel
