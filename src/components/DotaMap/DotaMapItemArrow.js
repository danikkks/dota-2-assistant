import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { DotaMapItem } from ".";
import styles from "./DotaMapItemArrow.module.css";

const DotaMapItemArrow = ({ angle, color, ...props }) => (
  <DotaMapItem color={color} {...props}>
    <i
      style={{
        transform: `translate(-50%, 0) rotate(${angle}deg) translateY(-16%)`,
        color
      }}
      className={classNames("fas fa-long-arrow-alt-up", styles.arrow)}
    />
    <i style={{ color, fontSize: ".5em" }} className="fas fa-circle" />
  </DotaMapItem>
);

DotaMapItemArrow.propTypes = {
  angle: PropTypes.number,
  color: PropTypes.string
};

DotaMapItemArrow.defaultProps = {
  angle: 0,
  color: "yellow"
};

export default DotaMapItemArrow;
