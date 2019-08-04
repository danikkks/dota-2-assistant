import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import values from "ramda/es/values";
import propOr from "ramda/es/propOr";
import filter from "ramda/es/filter";
import map from "ramda/es/map";
import isNil from "ramda/es/isNil";
import isEmpty from "ramda/es/isEmpty";
import compose from "ramda/es/compose";

import { DotaMapItemArrow } from ".";

import { camps } from "../../configs";
import { Time } from "../Timings";

import styles from "./DotaStackPullMapItems.module.css";

const DotaStackPullMapItems = ({ filter: dotaMapFilter }) => (
  <>
    {map(
      camp => (
        <React.Fragment key={camp.label}>
          {map(
            ({ coordinate, stack, pull }) => (
              <React.Fragment key={`${coordinate.x}${coordinate.y}`}>
                {!isNil(pull) && (
                  <DotaMapItemArrow
                    coordinate={coordinate}
                    label={
                      <>
                        <span className={styles.actionLabel}>Pull: </span>
                        <Time format=":ss" time={pull.times[0]} />
                        /
                        <Time format=":ss" time={pull.times[1]} />
                      </>
                    }
                    labelProps={{
                      position: pull.labelPosition || "bottom",
                      distance: pull.labelDistance || 20,
                      size: "small"
                    }}
                    angle={pull.angle}
                    color={"#ffffff"}
                  />
                )}
                {!isNil(stack) && (
                  <DotaMapItemArrow
                    coordinate={coordinate}
                    label={
                      <>
                        <span className={styles.actionLabel}>Stack: </span>
                        <Time time={stack.time} />
                      </>
                    }
                    labelPosition="top"
                    labelProps={{
                      position: stack.labelPosition || "top",
                      distance: stack.labelDistance || 20,
                      size: "small"
                    }}
                    angle={stack.angle}
                    color={camp.color}
                  />
                )}
              </React.Fragment>
            ),
            camp.list
          )}
        </React.Fragment>
      ),
      compose(
        filter(
          ({ type }) =>
            isEmpty(dotaMapFilter.campTypes) ||
            dotaMapFilter.campTypes.includes(type)
        ),
        values
      )(camps)
    )}
  </>
);

export default DotaStackPullMapItems;
