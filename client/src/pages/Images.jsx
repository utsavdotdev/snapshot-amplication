import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import styles from "../css/pages/Images.module.css";
import { useOutletContext, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";

const Images = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useOutletContext();
  const [res, setRes] = useState({
    uri: "",
    type: "",
  });
  const [loading, setLoading] = useState(true);

   const saveImage = async () => {};
  return (
    <>
      <Page name="Images"></Page>
    </>
  );
};

export default Images;
