import React from "react";
import PropTypes from "prop-types";
import { DotaMap, DotaMapFilterByCamp, DotaStackPullMapItems } from ".";

class DotaStackPullMap extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        campTypes: [],
        actionTypes: []
      }
    };

    this.onCampsFilterChange = this.onCampsFilterChange.bind(this);
  }

  onCampsFilterChange(filter) {
    this.setState(() => ({
      filter: { ...this.state.filter, campTypes: filter }
    }));
  }

  render() {
    return (
      <>
        <DotaMapFilterByCamp
          filter={this.state.filter.campTypes}
          onFilterChange={this.onCampsFilterChange}
        />
        <DotaMap
          mapItems={<DotaStackPullMapItems filter={this.state.filter} />}
        />
      </>
    );
  }
}

export default DotaStackPullMap;
