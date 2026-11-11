import React, { useState, useEffect } from "react";
import styles from '../css/homepage.module.css';
import { Link } from "react-router-dom";

function Navigation({ scrollToAbout, scrollToProgramm }) {
  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.first}>Беларусь сквозь сердце</Link>
      <div className={styles.points}>
        <a onClick={scrollToAbout} className={styles.point}>О нас</a>
        <a onClick={scrollToProgramm} className={styles.point}>Общая программа</a>
        <Link to="/travels" className={styles.pointprog}>Путешествия</Link>
      </div>
    </nav>
  );
}

export default Navigation;
