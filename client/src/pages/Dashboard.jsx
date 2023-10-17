import React from "react";
import react, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { MdCamera } from "react-icons/md";
import styles from "../css/pages/Dashboard.module.css";
import { toast } from "react-hot-toast";
import Page from "../components/Page";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useOutletContext();
  const [more, setMore] = useState(false);

  // User Input states
  const [data, setData] = useState({
    url: "",
    width: 1920,
    height: 1080,
    type: "png",
    block_ads: false,
    block_cookies: false,
    full_page: false,
    fresh: false,
    scroll_page: false,
  });

  const sendUrl = async () => {
    if (data.url === "") {
      setData({});
      return toast.error("Please enter a URL", { id: "url" });
    }
    navigate("/img", {
      state: data,
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Page name="Dashboard">
        <div className={styles.dash_con}>
          <div className={styles.main_con}>
            <div className={styles.header}>
              <h2>Snap Shot</h2>
              <span>Capture beautiful pictures of website</span>
            </div>
            <div className={styles.input_con}>
              <input
                type="url"
                placeholder="Enter website url"
                name="url"
                value={data.url}
                onChange={handleChange}
                required
              />
              <div className={styles.more} onClick={() => setMore(!more)}>
                {more ? "Hide" : "Show"} Advanced Option
              </div>
              {more && (
                <div className={styles.features_con}>
                  <div className={styles.feature}>
                    <label>Browser Size</label>
                    <div className={styles.size_con}>
                      <input
                        type="number"
                        placeholder="Width"
                        name="width"
                        value={data.width}
                        onChange={handleChange}
                      />
                      <input
                        type="number"
                        placeholder="Height"
                        name="height"
                        value={data.height}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.feature}>
                    <label>File type</label>
                    <div className={styles.select_con}>
                      <select
                        id="file_type"
                        name="type"
                        value={data.type}
                        onChange={handleChange}
                      >
                        <option value="png">png</option>
                        <option value="jpeg">jpeg</option>
                        <option value="webp">webp</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.feature}>
                    <label>Options</label>
                    <div className={styles.option_con}>
                      <div className={styles.check_con}>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          name="block_ads"
                          checked={data.block_ads}
                          onChange={() =>
                            setData({ ...data, block_ads: !data.block_ads })
                          }
                        />
                        <span>Block Ads</span>
                      </div>
                      <div className={styles.check_con}>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          name="block_cookies"
                          checked={data.block_cookies}
                          onChange={() =>
                            setData({
                              ...data,
                              block_cookies: !data.block_cookies,
                            })
                          }
                        />
                        <span>No-cookies</span>
                      </div>
                      <div className={styles.check_con}>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          name="full_page"
                          checked={data.full_page}
                          onChange={() =>
                            setData({ ...data, full_page: !data.full_page })
                          }
                        />
                        <span>Full Page screenshot</span>
                      </div>
                      <div className={styles.check_con}>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          name="fresh"
                          checked={data.fresh}
                          onChange={() =>
                            setData({ ...data, fresh: !data.fresh })
                          }
                        />
                        <span>Fresh Screenshot</span>
                      </div>
                      <div className={styles.check_con}>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          name="scroll_page"
                          checked={data.scroll_page}
                          onChange={() =>
                            setData({ ...data, scroll_page: !data.scroll_page })
                          }
                        />
                        <span>Scroll Page</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <button type="submit" className={styles.btn} onClick={sendUrl}>
                Take a shot
                <MdCamera className={styles.shot} />
              </button>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default Dashboard;
