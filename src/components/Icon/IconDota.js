import React from "react";
import PropTypes from "prop-types";

const IconDota = ({ src, ...props }) => <img {...props} src={src} />;

IconDota.propTypes = {
  name: PropTypes.string
};

export default IconDota;
