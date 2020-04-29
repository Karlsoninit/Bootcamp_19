import React from "react";
import PropTypes from "prop-types";
import styles from "./card.module.css";
import { changeImageBackground } from "../../ui/changeBackground";

export const Card = ({ title, sku, isAuth, sale }) => {
  const x = changeImageBackground(sale);
  console.log(x);

  return (
    <div className={isAuth ? styles.isActive : styles.cardContainer}>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: `url(${x})`,
        }}
      >
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div>
        <img alt="lego" src={require(`../../images/${sku}_1.jpg`)} />
      </div>
    </div>
  );
};

Card.defaultProps = {
  sku: "00498002915966300",
  sale: false,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  sku: PropTypes.number,
};
