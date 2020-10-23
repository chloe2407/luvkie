import React from "react";
import Divider from '@material-ui/core/Divider';
import { makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles => ({
  root: {
    maxHeight: "4vh"
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Divider />
        <Typography>About Us</Typography>
        <Typography>Contact Us</Typography>
        <Typography>Returns + Exchanges</Typography>
        <Typography>Shipping</Typography>
    </div>
  );
};

export default Footer;
