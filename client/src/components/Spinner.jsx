import React from 'react'
import styles from "../css/components/Spinner.module.css"

const Spinner = () => {
  return (
    <div className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner