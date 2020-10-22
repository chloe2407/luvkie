import React from 'react'
import Carousel from "../pages/parts/Carousel.js";

import data from "../../data/homepage.js";

const HomePage = props => {
    return (
        <div>

            <Carousel {...data}/>
            {/* testimonial here */}
        </div>
    )
}

export default HomePage