import React from "react";
import PropTypes from "prop-types";

const Time = ({ time, format = "mm:ss" }) => (
  <time dateTime={time.toISOString()}>
    {time.format(format, { trim: false })}
  </time>
);

Time.propTypes = {
  time: PropTypes.object.isRequired
};

export default Time;
