import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "react-tippy";
import styles from "./DotaMapItem.module.css";

class DotaMapItem extends React.PureComponent {
  static propTypes = {
    label: PropTypes.node,
    labelProps: PropTypes.object,
    color: PropTypes.string,
    coordinate: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired,
    children: PropTypes.node.isRequired,
    style: PropTypes.object
  };

  static defaultProps = {
    style: {},
    color: "#ffffff",
    labelProps: {}
  };

  render() {
    const {
      label,
      labelProps,
      color,
      coordinate,
      children,
      style
    } = this.props;

    return (
      <li
        style={{
          ...style,
          top: `${coordinate.x}%`,
          left: `${coordinate.y}%`,
          transform: `translate(-50%, -50%)`
        }}
        className={styles.dotaMapItem}
      >
        <div className={styles.contentWrapper}>
          <Tooltip
            html={<div style={{ color }}>{label}</div>}
            open
            {...labelProps}
            style={{ display: "flex" }}
          >
            {children}
          </Tooltip>
        </div>
      </li>
    );
  }
}

export default DotaMapItem;
