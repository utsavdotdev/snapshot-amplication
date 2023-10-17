import React from "react";
import { Helmet } from "react-helmet";

const Page = ({ name, children }) => {
  return (
    <>
      <Helmet>
        <title> {name} - Snap</title>
      </Helmet>
      {children}
    </>
  );
};

export default Page;
