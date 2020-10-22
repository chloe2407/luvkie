import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
  
});

const Footer = props => {
  return (
    <div style={{maxHeight: "4vh"}}>
        <Divider />
   
            <body>About Us</body>
            <body>Contact Us</body>
            <body>Returns + Exchanges</body>
            <body>Shipping</body>

    </div>
  );
};

export default withStyles(styles)(Footer);
