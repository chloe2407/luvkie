import React from 'react'
import MyCarousel from "../pages/parts/Carousel.js";
import data from "../../data/homepage.js";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles ({
  root: {

  }
});

const HomePage = () => {
    const classes = useStyles();
    return (
        <div>
            <MyCarousel {...data}/>
            {/* testimonial here */}
        </div>
    )
}

export default HomePage;