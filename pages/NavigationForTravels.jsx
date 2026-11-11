import React, { useState, useEffect } from "react";
import styles from '../css/homepage.module.css';

import travelsStyles from '../css/travels.module.css';
import { Link } from "react-router-dom";

function NavigationForTravels({scrollToTravels}) {
  return (
    <nav className={styles.navigation}>
      <Link to="/" className={travelsStyles.first_for_travels}>Беларусь сквозь сердце</Link>
      <Link onClick={scrollToTravels} to="/travels" className={styles.point}>Путешествия</Link>
    </nav>
  );
}

export default NavigationForTravels;
