import React from "react";
import PropTypes from "prop-types";
import values from "ramda/es/values";
import without from "ramda/es/without";
import { camps } from "../../configs";
import styles from "./DotaMapFilterByCamp.module.css";

class DotaMapFilterByCamp extends React.PureComponent {
  static propTypes = {
    filter: PropTypes.array.isRequired,
    onFilterChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.onCriterionClick = this.onCriterionClick.bind(this);
  }

  onCriterionClick(campType) {
    const { filter, onFilterChange } = this.props;

    if (filter.includes(campType)) {
      onFilterChange(without([campType], filter));
    } else {
      onFilterChange([...filter, campType]);
    }
  }

  render() {
    const { filter } = this.props;
    return (
      <>
        <span>Filter by camp type:</span>
        <ul className={styles.dotaMapFilterByCamp}>
          {values(camps).map(({ label, type, color }) => (
            <li key={label + type} style={{ color }} className={styles.item}>
              <label>
                <input
                  type="checkbox"
                  checked={filter.includes(type)}
                  onChange={() => this.onCriterionClick(type)}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default DotaMapFilterByCamp;
