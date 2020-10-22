import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Nav from "../pages/parts/navbar.js";


const styles = theme => ({
  
})

class Header extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div>
          <Nav/>

      </div>
    );
  }
}


export default withStyles(styles)(Header);