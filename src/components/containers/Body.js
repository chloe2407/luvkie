import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


import Homepage from "../pages/HomePage.js";
import New from "../pages/NewArrivals.js";
import Review from "../pages/Review.js";
import Wish from "../pages/Wishlist.js";
import Basket from "../pages/Basket.js";
import Care from "../pages/CustomerCare.js";
import ErrorPage from "../pages/Error.js";



const useStyles = makeStyles ({
  root: {
    paddingTop: 35
  }
});


//user ROUTE to switch from different pages
const Body = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/new" exact component={New}/>
            <Route path="/review" exact component={Review}/>
            <Route path="/wish" exact component={Wish}/>
            <Route path="/basket" exact component={Basket}/>
            <Route path="/care" exact component={Care}/>
            {/* <Route component={ErrorPage}/> */}
        </Switch>
      </div> 
  );
}

export default Body;