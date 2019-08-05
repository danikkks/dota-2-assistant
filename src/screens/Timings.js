import React from "react";
import { Timings } from "../components/Timings";
import { withNoSleep } from "../HOCs";

class TimingsScreen extends React.Component {
  render() {
    return <Timings />;
  }
}

export default withNoSleep()(TimingsScreen);
