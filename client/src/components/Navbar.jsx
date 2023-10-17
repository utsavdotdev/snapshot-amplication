import React, { useEffect, useState } from "react";
import styles from "../css/components/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { MdCamera } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { RiShieldFlashFill } from "react-icons/ri";
import { login, signup } from "../lib/auth";
import { MdClose } from "react-icons/md";
import UserAvatar from "react-user-avatar";

const Navbar = ({ setUser,user }) => {
  const jwtKey = "accessToken";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [popup, setPopup] = useState(false);
  const token = localStorage.getItem(jwtKey);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  const handleUsernameChange = (e) => setUsername(e.target.value.toLowerCase());
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmChange = (e) => setConfirm(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const func = isLogin ? login : signup;
    if (!isLogin) {
      if (password !== confirm) {
        return alert("Passwords do not match");
      }
    }
    const result = await func(username, password);
    setUser(result);
    setPopup(!popup);
    window.location.reload();
  };
  const onLogout = () => {
    localStorage.removeItem(jwtKey);
    setIsAuthenticated(false);
    window.location.reload();
  };
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
              <UserAvatar
                name={user?.username === undefined ? "user" : user.username}
                size="45"
                style={{
                  color: "#fff",
                  fontSize:"1.3rem",
                  textTransform:"uppercase",
                  fontWeight:"500"
                }}
              />
              <NavLink to="/collection" className={styles.my}>
                My Collection
              </NavLink>
              <button onClick={() => onLogout()}>
                <IoLogOutOutline />
              </button>
            </div>
          ) : (
            <div className={styles.auth_con} onClick={() => setPopup(!popup)}>
              <button>
                <RiShieldFlashFill />
              </button>
              <p>Auth</p>
            </div>
          )}
        </div>
      </header>
      {popup && (
        <>
          <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.auth_header}>
                <p>{isLogin ? "Login" : "Sign Up"}</p>
              </div>
              <div className={styles.close} onClick={() => setPopup(false)}>
                <MdClose />
              </div>
              <div className={styles.input_field}>
                <input
                  name="username"
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className={styles.input}
                  required
                />
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={styles.input}
                  required
                />
                {!isLogin && (
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="confirm password"
                    value={confirm}
                    onChange={handleConfirmChange}
                    className={styles.input}
                    required
                  />
                )}
                <button type="submit" className={styles.submit}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className={styles.need}
                >
                  {isLogin ? "Need an account?" : "Already have an account?"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
