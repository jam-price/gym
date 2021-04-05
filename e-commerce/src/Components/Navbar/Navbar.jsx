import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/shop.png";
import useStyles from "./styles";

const Navbar = ({cart}) => {
  const classes = useStyles();
  
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} classes="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            James's Shop!
          </Typography>
          <div className={classes.grow}>
            <div className="classes button">
              <IconButton aria-label="Show cart Items" color="inherit">
                <Badge badgeContent={cart.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
