import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import styles from "../css/pages/Images.module.css";
import { useOutletContext, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
import toast from "react-hot-toast";
import * as imagesLib from "../lib/image";

const Images = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useOutletContext();
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(true);
  const api_key = import.meta.env.VITE_API_KEY;
  
  const {
    url,
    width,
    height,
    type,
    block_ads,
    block_cookies,
    full_page,
    fresh,
    scroll_page,
  } = location?.state;


  const getImage = async () => {
    try {
      const res = await axios.get(
        `https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=${url}&width=${width}&height=${height}&format=${type}&no_ads=${block_ads}&no_cookie_banners=${block_cookies}&full_page=${full_page}&fresh=${fresh}&scroll_page=${scroll_page}&response_type=json`
      );
      if (res) {
        setImg(res.data.url)
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  useEffect(() => {
    getImage();
  }, [url]);

  if (loading) {
    return (
      <>
        <div className={styles.load_con}>
          <Spinner />
        </div>
      </>
    );
  }

  const saveImage = async () => {
    try {
      const addImg = await imagesLib.create(user?.id, img);
      if (addImg) {
        toast.success("Image saved");
      }
    } catch (error) {
      console.log(error)
    }
  };
  const downloadImg = async () => {};
  return (
    <>
      <Page name="Images">
        <div className={styles.image_con}>
          <img src={img} alt="img" />
          <div className={styles.btn_con}>
            <button className={styles.download} onClick={() => downloadImg()}>
              Download
            </button>
            {user && (
              <button className={styles.save} onClick={() => saveImage()}>
                Save
              </button>
            )}
          </div>
        </div>
      </Page>
    </>
  );
};

export default Images;
