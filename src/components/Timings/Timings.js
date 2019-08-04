import React from "react";
import PropTypes from "prop-types";
import styles from "./Timings.module.css";
import { IconDota } from "../Icon";
import { runes, creeps, hero } from "../../configs";
import { Time } from ".";
import { DotaStackPullMap } from "../DotaMap";

class Timings extends React.Component {
  render() {
    return (
      <article>
        <h1>Timings 🕓</h1>

        <section className={styles.timingsContainer}>
          <section>
            <h2>
              Bounty Runes{" "}
              <IconDota
                className={styles.smallIcon}
                src={runes.bounty.items.bounty.icons.minimap}
              />
            </h2>
            <p>
              First spawn: <Time time={runes.bounty.firstSpawnTime} />
              <br />
              Rate: <Time time={runes.bounty.spawnRate} />
            </p>
          </section>
          <section>
            <h2>
              Power-up Runes{" "}
              <IconDota
                className={styles.smallIcon}
                src={runes.powerUp.items.doubleDamage.icons.minimap}
              />
              <IconDota
                className={styles.smallIcon}
                src={runes.powerUp.items.regeneration.icons.minimap}
              />
            </h2>
            <p>
              First spawn: <Time time={runes.powerUp.firstSpawnTime} />
              <br />
              Rate: <Time time={runes.powerUp.spawnRate} />{" "}
              <span
                title="randomly in one of
              2 locations"
                aria-label="randomly in one of
              2 locations"
              >
                🎲
              </span>
            </p>
          </section>
          <section>
            <h2>
              Lane creeps{" "}
              <IconDota
                className={styles.smallIcon}
                src={creeps.lane.list.melee.normal.icons.main}
              />
            </h2>
            <p>
              First spawn: <Time time={creeps.lane.firstSpawnTime} />
              <br />
              Rate: <Time time={creeps.lane.spawnRate} />
            </p>
          </section>
          <section>
            <h2>Buyback ⏰</h2>
            <p>
              Cooldown: <Time time={hero.buybackCooldown} />
            </p>
          </section>
        </section>

        <h2>Stack and pull </h2>
        <DotaStackPullMap />
      </article>
    );
  }
}

export default Timings;
