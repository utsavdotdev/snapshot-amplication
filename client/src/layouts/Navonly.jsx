import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../css/pages/Dashboard.module.css";
import { me } from "../lib/auth";

const Navonly = () => {
  const [user, setUser] = useState();
  
  useEffect(() => {
    async function getUser() {
      const result = await me();
      setUserFetchImage(result);
    }
    getUser();
  }, [setUser]);

  const setUserFetchImage = (user) => {
    setUser(user);
    if (!user) return;
    //fetch user's image
  };

  console.log(user);
  return (
    <>
      <Navbar setUser={setUserFetchImage} user={user} />
      <main className={styles.main}>
        <div className={styles.main_container}>
          <Outlet context={{ user }} />
        </div>
      </main>
    </>
  );
};

export default Navonly;
