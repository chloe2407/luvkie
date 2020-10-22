import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "../pages/parts/Carousel.js";


import data from "../../data/new.js";

const New = props => {
    return(
        <div>
            <Carousel {...data}/>
        </div>
    );
};

export default New
