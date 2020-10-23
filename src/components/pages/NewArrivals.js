import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import MyCarousel from "../pages/parts/Carousel.js";
import data from "../../data/new.js";

const useStyles = makeStyles ({
  root: {
    
  }
});

const New = () => {
    const classes = useStyles();
    return(
        <div>
            <MyCarousel {...data}/>
        </div>
    );
};

export default New
