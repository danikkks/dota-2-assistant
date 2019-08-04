import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <Link to="/">Dota 2 CHEET SHEET</Link>
                <nav>
                    <Link to="/timings">Timings</Link>
                </nav>
            </header>
        );
    }
}

export default Header;
