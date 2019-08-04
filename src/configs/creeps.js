import moment from "moment";

export const campTypes = {
  small: "CAMP_SMALL",
  medium: "CAMP_MEDIUM",
  large: "CAMP_LARGE",
  ancient: "CAMP_ANCIENT"
};

const camps = {
  [campTypes.small]: {
    type: campTypes.small,
    label: "small",
    color: "#21E09F",
    list: [
      {
        coordinate: { x: 20.8, y: 34.4 },
        stack: {
          angle: -81,
          time: moment.duration(53, "seconds"),
          labelDistance: 1,
          labelPosition: "right"
        },
        pull: {
          angle: -48,
          times: [
            moment.duration(14, "seconds"),
            moment.duration(45, "seconds")
          ],
          // labelDistance: 3,
          labelPosition: "top"
        }
      },
      {
        coordinate: { x: 76.8, y: 68.4 },
        stack: {
          angle: 85,
          time: moment.duration(53, "seconds"),
          labelDistance: 1,
          labelPosition: "top"
        },
        pull: {
          angle: 142,
          times: [
            moment.duration(14, "seconds"),
            moment.duration(45, "seconds")
          ]
        }
      }
    ]
  },
  [campTypes.medium]: {
    type: campTypes.medium,
    label: "medium",
    color: "#E6B61A",
    list: [
      {
        coordinate: { x: 23, y: 38.9 },
        stack: {
          angle: 110,
          time: moment.duration(55, "seconds"),
          labelDistance: 10,
          labelPosition: "bottom"
        }
      },
      {
        coordinate: { x: 36, y: 44.9 },
        stack: {
          angle: 63,
          time: moment.duration(54, "seconds"),
          labelDistance: 1,
          labelPosition: "bottom"
        }
      },
      {
        coordinate: { x: 49.6, y: 65.5 },
        stack: {
          angle: 101,
          time: moment.duration(53, "seconds"),
          labelDistance: 1,
          labelPosition: "top"
        }
      },
      {
        coordinate: { x: 43.3, y: 27.9 },
        stack: {
          angle: 226,
          time: moment.duration(56, "seconds"),
          labelDistance: 1,
          labelPosition: "top"
        }
      },
      {
        coordinate: { x: 61.3, y: 50.9 },
        stack: {
          angle: 145,
          time: moment.duration(55, "seconds"),
          labelDistance: 1,
          labelPosition: "top"
        }
      },
      {
        coordinate: { x: 77.7, y: 52.3 },
        stack: {
          angle: 62,
          time: moment.duration(55, "seconds"),
          labelDistance: 1,
          labelPosition: "bottom"
        }
      }
    ]
  },
  [campTypes.large]: {
    type: campTypes.large,
    label: "large",
    color: "#E22E3D",
    list: [
      {
        coordinate: { x: 26.8, y: 24 },
        pull: {
          angle: -75,
          times: [
            moment.duration(18, "seconds"),
            moment.duration(48, "seconds")
          ],
          labelDistance: 1,
          labelPosition: "bottom"
        },
        stack: { angle: 37, time: moment.duration(53, "seconds") }
      },
      {
        coordinate: { x: 28.4, y: 48.7 },
        stack: {
          angle: -59,
          time: moment.duration(53, "seconds"),
          labelDistance: 1,
          labelPosition: "bottom"
        }
      },
      {
        coordinate: { x: 28.5, y: 58.7 },
        stack: {
          angle: -66,
          time: moment.duration(54, "seconds"),
          labelDistance: 1,
          labelPosition: "right"
        }
      },
      {
        coordinate: { x: 44.5, y: 75.4 },
        stack: {
          angle: -117,
          time: moment.duration(56, "seconds"),
          labelDistance: 1,
          labelPosition: "top"
        }
      },
      {
        coordinate: { x: 50.6, y: 20.7 },
        stack: {
          angle: 65,
          time: moment.duration(55, "seconds"),
          labelDistance: 1,
          labelPosition: "bottom"
        }
      },
      {
        coordinate: { x: 76, y: 40 },
        stack: {
          angle: -13,
          time: moment.duration(55, "seconds"),
          labelDistance: 1,
          labelPosition: "bottom"
        }
      },
      {
        coordinate: { x: 69.9, y: 48.4 },
        stack: {
          angle: 130,
          time: moment.duration(56, "seconds"),
          labelDistance: 1,
          labelPosition: "top"
        }
      },
      {
        coordinate: { x: 75.5, y: 78.4 },
        stack: {
          angle: -66,
          time: moment.duration(56, "seconds"),
          labelDistance: 1,
          labelPosition: "bottom"
        },
        pull: {
          angle: 15,
          times: [
            moment.duration(18, "seconds"),
            moment.duration(48, "seconds")
          ],
          labelDistance: 26,
          labelPosition: "top"
        }
      }
    ]
  },
  [campTypes.ancient]: {
    type: campTypes.ancient,
    label: "ancient",
    color: "#22AFE3",
    list: [
      {
        coordinate: { x: 53.6, y: 35 },
        stack: {
          angle: -90,
          time: moment.duration(54, "seconds"),
          labelDistance: 1,
          labelPosition: "top"
        }
      },
      {
        coordinate: { x: 49.5, y: 76.8 },
        stack: {
          angle: 180,
          time: moment.duration(53, "seconds"),
          labelDistance: 1,
          labelPosition: "right"
        }
      }
    ]
  }
};

const creeps = {
  lane: {
    firstSpawnTime: moment.duration(0, "seconds"),
    spawnRate: moment.duration(30, "seconds"),
    list: {
      melee: {
        normal: {
          icons: {
            main:
              "https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/e/e7/Melee_Creep_Radiant_model.png/75px-Melee_Creep_Radiant_model.png?version=0bf2cac75dfe35d0b79451ee547901d9"
          }
        }
      }
    }
  }
};

export { camps, creeps };
