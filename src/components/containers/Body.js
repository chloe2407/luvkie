import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/HomePage.js";
import NewArrivals from "../pages/NewArrivals.js";
import Review from "../pages/Review.js";
import Wishlist from "../pages/Wishlist.js";
import Basket from "../pages/Basket.js";
import CustomerCare from "../pages/CustomerCare.js";
import ErrorPage from "../pages/Error.js";




//user ROUTE to switch from different pages
class Body extends Component {
  render() {
    return (
        <div style={{paddingTop: 35}}>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/new" exact component={NewArrivals}/>
                <Route path="/review" exact component={Review}/>
                <Route path="/wish" exact component={Wishlist}/>
                <Route path="/basket" exact component={Basket}/>
                <Route path="/care" exact component={CustomerCare}/>
                {/* <Route component={ErrorPage}/> */}
            </Switch>
        </div>
      
    );
  }
}
export default Body;