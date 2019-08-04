import React from "react";
import PropTypes from "prop-types";
import { map } from "../../configs";
import styles from "./DotaMap.module.css";

class DotaMap extends React.PureComponent {
  static propTypes = {
    mapItems: PropTypes.node
  };

  render() {
    const { mapItems } = this.props;

    return (
      <div className={styles.dotaMap}>
        <img className={styles.mapImg} src={map.image.main} />
        {mapItems && <ul className={styles.mapItems}>{mapItems}</ul>}
      </div>
    );
  }
}

export default DotaMap;
