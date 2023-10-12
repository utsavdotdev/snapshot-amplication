import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../css/pages/Dashboard.module.css";

const Navonly = () => {
  const user = {
    avatarUrl: "",
    displayName: "",
  };
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.main_container}>
          <Outlet context={{ user }} />
        </div>
      </main>
    </>
  );
};

export default Navonly;
