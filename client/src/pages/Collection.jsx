import React, { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import styles from "../css/pages/Collection.module.css";
import { FiDownload } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import Page from "../components/Page";

const Collection = () => {
  const { user } = useOutletContext();
  const [imgs, setImgs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
  }, []);

  const fetchImages = async () => {};
  const dltImage = async (id) => {};
  return (
    <>
      <Page name="Collection">
        <div className={styles.collection_con}>
          <h2>Images</h2>
          <div className={styles.images_con}>
            {imgs?.map(({ url, id }) => (
              <div className={styles.image} key={id}>
                <img src={url} />
                <div className={styles.overlay}>
                  <a href={url} download target={"_blank"}>
                    <FiDownload />
                  </a>
                  <span className={styles.dlt} onClick={() => dltImage(id)}>
                    <MdDelete />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Page>
    </>
  );
};

export default Collection;
