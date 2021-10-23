import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.app__title}>Expense Tracker</span>
      {/* <span className={styles.app__menu}>Login/Logout</span> */}
    </div>
  );
};

export default Header;
