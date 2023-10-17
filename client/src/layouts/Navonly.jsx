import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../css/pages/Dashboard.module.css";
import { me } from "../lib/auth";
import * as imagesLib from "../lib/image";

const Navonly = () => {
  const [user, setUser] = useState();
  const [images, setImages] = useState([]);

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
    const res = imagesLib.getAll(user?.id);
    if (res) {
      setImages(res.data);
    }
  };

  return (
    <>
      <Navbar setUser={setUserFetchImage} user={user} />
      <main className={styles.main}>
        <div className={styles.main_container}>
          <Outlet context={{ user,images }} />
        </div>
      </main>
    </>
  );
};

export default Navonly;
