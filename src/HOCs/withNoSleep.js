import React from "react";
import NoSleep from "nosleep.js";

const withNoSleep = () => Component =>
  class WithNoSleep extends React.Component {
    constructor(props) {
      super(props);
      this.noSleep = null;
    }

    componentDidMount() {
      this.noSleep = new NoSleep();
      this.noSleep.enable();
    }

    componentWillUnmount() {
      this.noSleep.disable();
      this.noSleep = null;
    }

    render() {
      const { ...props } = this.props;
      return <Component {...props} />;
    }
  };

export default withNoSleep;
