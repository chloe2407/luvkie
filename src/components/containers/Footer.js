import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import { Typography } from "@material-ui/core";


const styles = theme => ({
  
});

const Footer = props => {
  return (
    <div style={{maxHeight: "4vh"}}>
        <Divider />
   
            <Typography>About Us</Typography>
            <Typography>Contact Us</Typography>
            <Typography>Returns + Exchanges</Typography>
            <Typography>Shipping</Typography>

    </div>
  );
};

export default withStyles(styles)(Footer);
