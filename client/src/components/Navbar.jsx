import React, { useState } from "react";
import styles from "../css/components/Navbar.module.css";
import {
  Outlet,
  Link,
  useNavigate,
  NavLink,
  useLocation,
} from "react-router-dom";
import { MdCamera } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineGoogle } from "react-icons/ai";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = {
    avatarUrl: "",
    displayName: "",
  };
  const handleGoogleSignIn = () => {};
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <div className={styles.left}>
            <span>
              <MdCamera />
            </span>
            <p className={styles.logo_name}>Snapshot</p>
          </div>
        </Link>
        <div className={styles.right}>
          {isAuthenticated ? (
            <div className={styles.user}>
              <Avatar src={user?.avatarUrl} alt={user?.displayName} />
              <NavLink to="/mycollection" className={styles.my}>
                My Collection
              </NavLink>
              <button onClick={() => onLogout()}>
                <IoLogOutOutline />
              </button>
            </div>
          ) : (
            <div
              className={styles.auth_con}
              onClick={() => handleGoogleSignIn()}
            >
              <button>
                <AiOutlineGoogle />
              </button>
              <p>Login</p>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
