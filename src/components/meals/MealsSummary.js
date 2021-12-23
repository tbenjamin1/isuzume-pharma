import React from "react";
import classes from "./MealsSumary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Isuzume Pharama Store</h1>
      <p>
        prescription medications free online medical consultations <br></br>
        24/7 customer care center simple online odering system guaranteed lowest
        prices
      </p>
      <p>
        <strong>
          {" "}
          Get Cured <br></br>
          with isuzume pharmacy{" "}
        </strong>
        just-in-time and of course by expected phamacist?
      </p>
    </section>
  );
};

export default MealsSummary;
