import React, { Fragment } from "react";
import pharmas from "../../assets/pharmas.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> 🏡PHARMACY </h1>
        <HeaderCartButton onClick={props.onshowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={pharmas} alt="shoes store" />
      </div>
    </Fragment>
  );
};

export default Header;
